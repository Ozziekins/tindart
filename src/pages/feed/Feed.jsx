import React, { useContext, useEffect, useState } from 'react'
import {
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
} from './Feed.styles'
import Liked from '../../images/liked.png'
import CommentForm from '../../components/comment/CommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { favouriteActions } from '../../store/favourite/favourite.slice'
import CommentSection from '../../components/comment/CommentSection'

// window.sessionStorage.setItem('Favourites', JSON.stringify([]))

function getImage(imageId) {
  const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`

  return <PicFeed style={{ backgroundImage: `url(${imageUrl})` }} />
}

function showComment() {
  document.getElementById('comment1').style.display = 'block'
}

function Feed() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const favouriteImages = useSelector((state) => state.favourite)
  const dispatch = useDispatch()

  const handleClick = (event, favouriteUrl) => {
    event.target.style.backgroundImage = `url(${Liked})`
    event.target.style.backgroundSize = `20px`

    dispatch(favouriteActions.setFavourites({ favouriteImages: favouriteUrl }))
  }

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
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
      <LogoFeed to="/home" />
      <User to="/profile" />
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <Post>
              <PostUserNameTime>
                <ul>
                  <PostUser> </PostUser>
                  <LiFeed>
                    <LiFeedArtist> {item.artist_title} </LiFeedArtist>
                    <LiFeedDate> {item.date_display} </LiFeedDate>
                  </LiFeed>
                </ul>
                <DescriptionPic>
                  <DescriptionFeed> {item.title} </DescriptionFeed>
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
      </div>
      <div>
        <CommentSection />
      </div>
    </div>
  )

  // return (
  // <div>
  //   <LogoFeed to="/" />
  //   <User to="/profile" />
  //   <Post>
  //     <PostUserNameTime>
  //       <ul>
  //         <PostUser> </PostUser>
  //         <LiFeed>User Darryl</LiFeed>
  //       </ul>
  //       <DescriptionPic>
  //         <DescriptionFeed>Check out this exquisite painting from Luxembourgh!...</DescriptionFeed>
  //         <PicFeed />
  //       </DescriptionPic>
  //       <div>
  //         <FooterDescPic>
  //           <LikePic />
  //           <LikeFeed>Like</LikeFeed>
  //           <CommentPic />
  //           <CommentFeed>CommentForm </CommentFeed>
  //         </FooterDescPic>
  //       </div>
  //     </PostUserNameTime>
  //   </Post>
  // </div>
  // )
}

export default Feed
