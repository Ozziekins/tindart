import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Allerta');
`

export const SwipeLogo = styled.Link`
  float: left;
  top: 20px;
  margin-left: 500px;
  width: 400px;
  height: 80px;
  background-image: url('../../images/Logo-pages2.png');
`

export const CardSwipe = styled.div`
  background-image: url('../../images/swipe photo.png');
  position: absolute;
  width: 471px;
  height: 622px;
  left: 700px;
  top: 216px;
`

export const User = styled.Link`
  float: right;
  margin-top: 20px;
  margin-right: 500px;
  background-image: url('../../images/User photo.png');
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
  background-image: url('../../images/Like-swipe.png');
`

export const SwipeNope = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url('../../images/Nope.png');
`

export const SwipeInfo = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url('../../images/Info.png');
`

export const SwipeFave = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url('../../images/Favourite.png');
`

export const SwipeNext = styled.li`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-image: url('../../images/Next.png');
`
