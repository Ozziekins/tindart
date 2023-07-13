import React, { useEffect, useState } from 'react'
import {
  ArtistDate,
  CommentFeed,
  CommentPic,
  DescriptionFeed,
  DescriptionPic,
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
import authService from '../../services/authService'

let MAIN_URL = 'https://api.artic.edu/api/v1/artworks'

export function getImage(imageId) {
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
  const { photo } = useSelector((state) => state.user)
  const login = useSelector((state) => state.user.username);
  const { favouriteImages } = useSelector((state) => state.favourite);

  const [error] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [nextPage, setNextPage] = useState(MAIN_URL)
  const dispatch = useDispatch()

  const handleButtonClick = (value) => {
    console.log('Button clicked with value:', value);
  };

  const handleClick = (event, favouriteUrl) => {
    event.target.style.backgroundImage = `url(${Liked})`
    event.target.style.backgroundSize = `20px`

    dispatch(favouriteActions.setFavourites({ favouriteImages: favouriteUrl }))

    // const favouriteImg = favouriteImages.join(',');
    // console.log(favouriteImg)

    authService.submitFaves(login, favouriteImages);
  }

  const fetchFeedResults = (MAIN_URL) => {
    fetch(MAIN_URL)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true)
        setItems(result.data)
        setNextPage(result.pagination)
      })
  }

  const gotoNextPage = () => {
    MAIN_URL = nextPage.next_url
    console.log(MAIN_URL)

    fetchFeedResults(MAIN_URL)
  }

  const gotoPrevPage = () => {
    MAIN_URL = nextPage.prev_url
    console.log(MAIN_URL)

    fetchFeedResults(MAIN_URL)
  }

  useEffect(() => {
    fetchFeedResults(MAIN_URL)
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
      <div style={{ display: 'inline-flex' }}>
        <LogoFeed to="/home" />
        <Searchbutton onButtonClick={handleButtonClick} />
        <User
          onClick={showProfile}
          style={{
            backgroundImage: 'url(' + photo + ')',
            backgroundSize: '60px',
            objectFit: 'contain'
          }}
        />
        <NavProfile id="profile1" currentPage="feed" />
      </div>
      {items.slice(0, 15).map((item) => (
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
