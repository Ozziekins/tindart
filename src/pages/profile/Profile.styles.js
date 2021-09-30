import styled, { createGlobalStyle } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import LogoPages5 from '../../images/Logo-pages5.png'
import UserPhoto from '../../images/User photo.png'
import EditProf from '../../images/edit-profile.png'
import Fav1Photo from '../../images/fav1-photo.png'
import Fav2Photo from '../../images/fav2-photo.png'
import Fav3Photo from '../../images/fav3-box.png'
import ProfilePhoto from '../../images/Profile photo PROFILE.png'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Allerta');
`

export const LogoProfile = styled(Link)`
  float: left;
  top: 20px;
  margin-left: 150px;

  width: 476px;
  height: 80px;
  background-image: url(${LogoPages5});
`

export const User = styled.div`
  float: right;
  margin-top: 20px;
  margin-right: 500px;
  background-image: url(${UserPhoto});
  border-radius: 20px;
  width: 60px;
  height: 60px;
`

export const ProfileUser = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  left: 45%;
  top: 20%;
  border-radius: 50%;
  object-fit: contain;
  background-image: url(${ProfilePhoto});
`

export const UsernameProfile = styled.div`
  position: absolute;
  width: 178px;
  height: 42px;
  left: 45%;
  top: 38%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: #000000;
  text-align: center;
`

export const EditProfileIcon = styled.li`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 55%;
  top: 38.9%;

  background: url(${EditProf});
`

export const DescProfile = styled.div`
  position: absolute;
  width: 318px;
  height: 42px;
  left: 42%;
  top: 45%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
  text-align: center;
`

export const ProfileButtons = styled.ul`
  display: inline-flex;
  list-style-type: none;
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
  position: absolute;
  top: 55%;
  left: 45%;

  color: #6c4125;
  text-decoration-line: underline;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    cursor: pointer;
  }
`

export const FavProfile = styled.div`
  margin-left: 100px;

  width: 75px;
  height: 21px;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  position: absolute;
  top: 55%;
  left: 45%;

  color: #6c4125;
  text-decoration-line: underline;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    cursor: pointer;
  }
`

export const FavBoxProfile = styled.ul`
  position: absolute;
  top: 60%;
  left: 5%;
  display: inline-flex;
  list-style-type: none;
`

export const LiFavProfileBox1 = styled.li`
  width: 300px;
  height: 200px;
  margin-left: 100px;
  background-image: url(${Fav1Photo});
`

export const LiFavProfileBox2 = styled.li`
  width: 300px;
  height: 200px;
  margin-left: 100px;
  background-image: url(${Fav2Photo});
`

export const LiFavProfileBox3 = styled.li`
  width: 300px;
  height: 200px;
  margin-left: 100px;
  background-image: url(${Fav3Photo});
`
