import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import LogoPages2 from '../../images/Logo-pages2.png'
import SwipePhoto from '../../images/swipe photo.png'
import UserPhoto from '../../images/User photo.png'
import LikeSwipe from '../../images/Like-swipe.png'
import Nope from '../../images/Nope.png'
import Info from '../../images/Info.png'
import Favourite from '../../images/Favourite.png'
import Next from '../../images/Next.png'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Allerta');
`

export const SwipeLogo = styled(Link)`
  float: left;
  top: 20px;
  margin-left: 500px;
  width: 400px;
  height: 80px;
  background-image: url(${LogoPages2});
`

export const CardSwipe = styled.div`
  background-image: url(${SwipePhoto});
  position: absolute;
  width: 471px;
  height: 622px;
  left: 700px;
  top: 216px;
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

export const SwipeTitle = styled.div`
  position: absolute;
  left: 17%;
  right: 46.5%;
  top: 77.17%;
  bottom: 13.83%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  color: #ffffff;
`

export const SwipeButtons = styled.ul`
  position: absolute;
  left: 9%;
  right: 16.56%;
  top: 87.94%;
  bottom: 4.82%;
  display: inline-flex;
  list-style-type: none;
`

export const SwipeLike = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url(${LikeSwipe});
`

export const SwipeNope = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url(${Nope});
`

export const SwipeInfo = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url(${Info});
`

export const SwipeFave = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url(${Favourite});
`

export const SwipeNext = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url(${Next});
`
