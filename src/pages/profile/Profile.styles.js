import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import LogoPages5 from '../../images/Logo-pages5.png'
import UserPhoto from '../../images/Userphoto.png'
import EditProf from '../../images/edit-profile.png'
import Fav1Photo from '../../images/fav1-photo.png'
import ProfilePhoto from '../../images/Profile photo PROFILE.png'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Allerta');
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 29% 3px 9%;
`;

export const LogoProfile = styled(Link)`
  // float: left;
  // top: 20px;
  // margin-left: 150px;

  width: 476px;
  height: 80px;
  background-image: url(${LogoPages5});
`

export const User = styled.div`
  // float: right;
  margin-top: 20px;
  // margin-right: 500px;
  //background-image: url(${UserPhoto});
  background-color: grey;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`

export const ProfileUser = styled.div`
  // position: absolute;
  width: 150px;
  height: 150px;
  // left: 45%;
  // top: 20%;
  border-radius: 50%;
  object-fit: contain;
  // background-image: url(${ProfilePhoto});
  background-color: grey;
  margin-bottom: 20px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const UsernameProfile = styled.div`
  // position: absolute;
  // width: 178px;
  // height: 42px;
  // left: 45%;
  // top: 38%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: #000000;
  text-align: center;
  margin-bottom: 20px;
`

export const EditProfileIcon = styled.p`
  // position: absolute;
  width: 25px;
  height: 25px;
  // left: 55%;
  // top: 38.9%;

  background: url(${EditProf});
  cursor: pointer;
  margin-bottom: 20px;
`

export const UserNameEditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px; // Or whatever gap you want between them
`

export const DescProfile = styled.div`
  // position: absolute;
  // width: 318px;
  // height: 42px;
  // left: 42%;
  // top: 45%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
  margin-bottom: 20px;
`

export const ProfileButtons = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 20px;
`

export const LiProfile = styled.div`
  width: 75px;
  height: 21px;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  // position: absolute;
  // top: 55%;
  // left: 45%;

  color: #6c4125;
  text-decoration-line: underline;
  cursor: pointer;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    // cursor: pointer;
    color: brown;
  }

  // &:focus {
  //   cursor: pointer;
  // }
`

export const FavProfile = styled.div`
  // margin-left: 100px;

  width: 75px;
  height: 21px;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  // position: absolute;
  // top: 55%;
  // left: 45%;

  color: #6c4125;
  text-decoration-line: underline;
  cursor: pointer;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    // cursor: pointer;
    color: brown;
  }

  // &:focus {
  //   cursor: pointer;
  // }
`

export const FavBoxProfile = styled.ul`
  // position: absolute;
  // top: 60%;
  // left: 5%;
  display: inline-flex;
  list-style-type: none;
`

export const LiFavProfileBox1 = styled.li`
  width: 300px;
  height: 200px;
  // margin-left: 100px;
  margin-right: 20px;
  background-image: url(${Fav1Photo});
`
