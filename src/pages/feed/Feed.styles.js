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
  
  body {
    height: 100%;
    width: 100%;
    background-color: gray; 
  }
`

export const Main = styled.body`
  height: 100%;
  width: 100%;
  background-color: #fafafa;
`

export const Post = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 0px;
`

export const User = styled(Link)`
  position: absolute;
  left: 70%;
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
  margin-left: 300px;
  background-image: url(${LogoPages});
  width: 400px;
  height: 80px;
`

export const FeedHeader = styled.div`
  //display: flex;
  //flex-direction: row;
  position: relative;
  top: 20px;
  display: inline;
  margin-left: 100px;
`

export const PostUserNameTime = styled.div`
  border: 1px solid #6c4125;
  position: relative;
  left: 600px;
  top: 222px;
  color: black;
  width: 646px;
  height: 579px;

  border-radius: 10px;

  background-color: white;
`

export const LiFeed = styled.ul`
  float: left;
  font-family: Lato, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  /* identical to box height, or 154% */
  list-style-type: none;
  margin-top: -50px;

  display: flex;
  flex-direction: column;
`

export const LiFeedArtist = styled.li`
  position: relative;
  float: left;

  font-family: Lato, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: #000000;
`

export const LiFeedDate = styled.li`
  position: relative;
  float: left;

  font-family: Lato, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  /* identical to box height, or 154% */

  margin-top: 5px;

  color: grey;
`

export const PostUser = styled.li`
  margin-right: 50px;
  width: 60px;
  height: 60px;
  background-image: url(${UserPhoto});
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

export const NextPageBtn = styled.div`
  width: fit-content;
  height: fit-content;
  background: #6c4125;
  border-radius: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: #ffffff;

  text-align: center;
  margin-left: 10px;
  margin-right: auto;
  margin-top: 50px;
  padding: 10px;
`

export const PrevPageBtn = styled.div`
  width: fit-content;
  height: fit-content;
  background: #6c4125;
  border-radius: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: #ffffff;

  text-align: center;
  margin-left: auto;
  margin-right: 10px;
  margin-top: 50px;
  padding: 10px;
`
