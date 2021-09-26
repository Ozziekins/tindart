import React from 'react'
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

function Feed() {
  return (
    <div>
      <LogoFeed to="/" />
      <User to="/profile" />
      <Post>
        <PostUserNameTime>
          <ul>
            <PostUser> </PostUser>
            <LiFeed>User Darryl</LiFeed>
          </ul>
          <DescriptionPic>
            <DescriptionFeed>Check out this exquisite painting from Luxembourgh!...</DescriptionFeed>
            <PicFeed />
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
  )
}

export default Feed
