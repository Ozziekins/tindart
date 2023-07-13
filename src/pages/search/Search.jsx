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
  PicFeed,
  Post,
  PostUser,
  PostUserNameTime,
  User
} from './Search.styles'
import Liked from '../../images/liked.png'
import CommentForm from '../../components/comment/CommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { favouriteActions } from '../../store/favourite/favourite.slice'
import CommentSection from '../../components/comment/CommentSection'
import NavProfile from '../../components/profile/NavProfile'
import RetrieveSearch from './RetrieveSearch'

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

const Search = React.memo(() => {
  const { photo } = useSelector((state) => state.user)

  const [error] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const [searchdata, setSearchdata] = useState([])
  // const [urlsdata, setUrlsdata] = useState([])

  const dispatch = useDispatch()

  const handleClick = (event, favouriteUrl) => {
    event.target.style.backgroundImage = `url(${Liked})`
    event.target.style.backgroundSize = `20px`

    dispatch(favouriteActions.setFavourites({ favouriteImages: favouriteUrl }))
  }

  const searchRes = RetrieveSearch()

  useEffect(() => {
    searchRes.map((search) => {
      fetch(search.api_link)
        .then((searchres) => searchres.json())
        .then((searchresult) => {
          setIsLoaded(true)
          // setSearchdata(searchresult.data)
          setSearchdata(searchdata.concat(searchresult.data))
        })
    })
  }, [searchRes])

  if (error) {
    return (
      <div>
        <LogoFeed to="/feed" />
        <User to="/profile" />
        <Post>Error: {error.message}</Post>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div>
        <LogoFeed to="/feed" />
        <User to="/profile" />
        <Post>Loading...</Post>
      </div>
    )
  }

  return (
    <div>
      <LogoFeed to="/feed" />
      <User
        onClick={showProfile}
        style={{
          backgroundImage: 'url(' + photo + ')',
          backgroundSize: '60px',
          objectFit: 'contain'
        }}
      />
      <NavProfile id="profile1" currentPage="search" />
      {searchdata.map((searchItem) => (
        <div key={searchItem.id}>
          <Post>
            <PostUserNameTime>
              <ArtistDate>
                <PostUser />
                <LiFeed>
                  <LiFeedArtist> {searchItem.artist_title} </LiFeedArtist>
                  <LiFeedDate> {searchItem.date_display} </LiFeedDate>
                </LiFeed>
              </ArtistDate>
              <DescriptionPic>
                <DescriptionFeed>
                  <p>Title: {searchItem.title} </p>
                  <p>Place of origin: {searchItem.place_of_origin}</p>
                </DescriptionFeed>
                {getImage(searchItem.image_id)}
              </DescriptionPic>
              <div>
                <FooterDescPic>
                  <LikePic
                    onClick={(e) => {
                      handleClick(e, searchItem.image_id)
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
    </div>
  )
})

export default Search
