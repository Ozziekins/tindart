import React, { useEffect, useState } from 'react'
import {
  CommentFeed,
  CommentPic,
  DescriptionFeed,
  DescriptionPic,
  FooterDescPic,
  LiFeed,
  LikeFeed,
  LikePic,
  LogoFeed,
  PicFeed,
  Post,
  PostUser,
  PostUserNameTime,
  User
} from './Feed.styles'

function getImage(imageId) {
  const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`

  return <PicFeed style={{ backgroundImage: `url(${imageUrl})` }} />
}

function Feed() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

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
        <LogoFeed to="/" />
        <User to="/profile" />
        <Post>Error: {error.message}</Post>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div>
        <LogoFeed to="/" />
        <User to="/profile" />
        <Post>Loading...</Post>
      </div>
    )
  }

  return (
    <div>
      <LogoFeed to="/" />
      <User to="/profile" />
      {items.map((item) => (
        <div key={item.id}>
          <Post>
            <PostUserNameTime>
              <ul>
                <PostUser> </PostUser>
                <LiFeed>User Darryl</LiFeed>
              </ul>
              <DescriptionPic>
                <DescriptionFeed> {item.title} </DescriptionFeed>
                {getImage(item.image_id)}
              </DescriptionPic>
              <div>
                <FooterDescPic>
                  <LikePic />
                  <LikeFeed>Like</LikeFeed>
                  <CommentPic />
                  <CommentFeed>Comment </CommentFeed>
                </FooterDescPic>
              </div>
            </PostUserNameTime>
          </Post>
        </div>
      ))}
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
  //           <CommentFeed>Comment </CommentFeed>
  //         </FooterDescPic>
  //       </div>
  //     </PostUserNameTime>
  //   </Post>
  // </div>
  // )
}

export default Feed
