import React, { useContext, useEffect, useState } from 'react'
import {
  ArtistDate,
  CommentFeed,
  CommentPic,
  DescriptionFeed,
  DescriptionPic,
  FeedHeader,
  FooterDescPic,
  LiFeed,
  LiFeedArtist,
  LiFeedDate,
  LikeFeed,
  LikePic,
  LogoFeed,
  NextPageBtn,
  PicFeed,
  Post,
  PostUser,
  PostUserNameTime,
  PrevPageBtn,
  User
} from './Feed.styles'
import Liked from '../../images/liked.png'
import CommentForm from '../../components/comment/CommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { favouriteActions } from '../../store/favourite/favourite.slice'
import CommentSection from '../../components/comment/CommentSection'
import Searchbutton from '../../components/searchbutton/Searchbutton'
import NavProfile from '../../components/profile/NavProfile'

let MAIN_URL = 'https://api.artic.edu/api/v1/artworks'

function getImage(imageId) {
  const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`

  return (
    <PicFeed style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: '450px 357px', objectFit: 'contain' }} />
  )
}

function showComment() {
  document.getElementById('comment1').style.display = 'block'
}

function showProfile() {
  document.getElementById('profile1').style.display = 'block'
}

function Feed() {
  const { username, description, photo } = useSelector((state) => state.user)

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [nextPage, setNextPage] = useState(MAIN_URL)
  const favouriteImages = useSelector((state) => state.favourite)
  const dispatch = useDispatch()

  const handleClick = (event, favouriteUrl) => {
    event.target.style.backgroundImage = `url(${Liked})`
    event.target.style.backgroundSize = `20px`

    dispatch(favouriteActions.setFavourites({ favouriteImages: favouriteUrl }))
  }

  const gotoNextPage = () => {
    MAIN_URL = nextPage.next_url
    console.log(MAIN_URL)

    fetch(MAIN_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
          setNextPage(result.pagination)
        },

        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }

  const gotoPrevPage = () => {
    MAIN_URL = nextPage.prev_url
    console.log(MAIN_URL)

    fetch(MAIN_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
          setNextPage(result.pagination)
        },

        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }

  useEffect(() => {
    fetch(MAIN_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
          setNextPage(result.pagination)
        },

        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return (
      <div>
        <LogoFeed to="/home" />
        <User to="/profile" />
        <Post>Error: {error.message}</Post>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div>
        <LogoFeed to="/home" />
        <User to="/profile" />
        <Post>Loading...</Post>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <LogoFeed to="/home" />
        <Searchbutton />
        <User
          onClick={showProfile}
          style={{
            backgroundImage: 'url(' + photo + ')',
            backgroundSize: '60px',
            objectFit: 'contain'
          }}
        />
        <NavProfile id="profile1" />
      </div>
      {items.map((item) => (
        <div key={item.id}>
          <Post>
            <PostUserNameTime>
              <ArtistDate>
                <PostUser />
                <LiFeed>
                  <LiFeedArtist> {item.artist_title} </LiFeedArtist>
                  <LiFeedDate> {item.date_display} </LiFeedDate>
                </LiFeed>
              </ArtistDate>
              <DescriptionPic>
                <DescriptionFeed>
                  <p>Title: {item.title} </p>
                  <p>Place of origin: {item.place_of_origin}</p>
                </DescriptionFeed>
                {getImage(item.image_id)}
              </DescriptionPic>
              <div>
                <FooterDescPic>
                  <LikePic
                    onClick={(e) => {
                      handleClick(e, item.image_id)
                    }}
                  />
                  <LikeFeed>Like</LikeFeed>
                  <CommentPic onClick={showComment} />
                  <CommentFeed>Comment </CommentFeed>
                </FooterDescPic>
              </div>
            </PostUserNameTime>
          </Post>
          <CommentForm id="comment1" />
        </div>
      ))}
      <div>
        <CommentSection />
      </div>
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'fixed', top: '90%', right: '35%' }}>
        <PrevPageBtn onClick={gotoPrevPage}> Prev </PrevPageBtn>
        <NextPageBtn onClick={gotoNextPage}> Next </NextPageBtn>
      </div>
    </div>
  )
}

export default Feed
