import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import UserPhoto from '../../images/User photo.png'
import LogoPages from '../../images/Logo-pages.png'
import UserPhoto2 from '../../images/User photo2.png'
import MikeVon from '../../images/mike von.png'
import Like from '../../images/like.png'
import Comment from '../../images/comment.png'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
`

export const Post = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 0px;
`

export const User = styled(Link)`
  float: right;
  margin-top: 20px;
  margin-right: 500px;
  background-image: url(${UserPhoto});
  border-radius: 20px;
  width: 60px;
  height: 60px;
`

export const LogoFeed = styled(Link)`
  float: left;
  top: 20px;
  margin-left: 500px;
  background-image: url(${LogoPages});
  width: 400px;
  height: 80px;
`

export const PostUserNameTime = styled.div`
  border: 1px solid #6c4125;
  position: relative;
  left: 600px;
  top: 222px;
  color: black;
  width: 646px;
  height: 579px;
`

export const LiFeed = styled.li`
  width: 100px;
  height: 60px;
  float: left;

  font-family: Lato, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  /* identical to box height, or 154% */

  list-style-type: none;
  margin-top: -50px;

  color: #000000;
`

export const PostUser = styled.li`
  margin-right: 50px;
  width: 60px;
  height: 60px;
  background-image: url(${UserPhoto2});

  width: 100px;
  height: 60px;
  float: left;

  font-family: Lato, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  /* identical to box height, or 154% */

  list-style-type: none;
  margin-top: -50px;

  color: #000000;
`

export const DescriptionPic = styled.div`
  margin-top: 100px;
  border-top: 1px solid #6c4125;
  border-bottom: 1px solid #6c4125;
  height: 420px;
`

export const DescriptionFeed = styled.div`
  font-family: Lato, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  color: #000000;
  margin-top: 20px;
  margin-left: 100px;
`

export const PicFeed = styled.div`
  background-image: url(${MikeVon});
  width: 450px;
  height: 357px;
  margin-top: 10px;
  margin-left: 100px;
`

export const FooterDescPic = styled.ul`
  display: inline-flex;
  list-style-type: none;
`

export const LikePic = styled.li`
  background-image: url(${Like});
  width: 20px;
  height: 20px;
  margin-right: 20px;
`

export const LikeFeed = styled.li`
  margin-right: 60px;

  font-family: Lato, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  color: #000000;
`

export const CommentPic = styled.li`
  background-image: url(${Comment});
  width: 20px;
  height: 20px;
  margin-right: 20px;
`

export const CommentFeed = styled.li`
  font-family: Lato, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  color: #000000;
`
