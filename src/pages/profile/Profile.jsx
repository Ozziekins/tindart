import React from 'react'

import {
  DescProfile,
  EditProfileIcon,
  FavBoxProfile,
  FavProfile,
  LiProfile,
  LogoProfile,
  ProfileButtons,
  ProfileUser,
  User,
  UsernameProfile
} from './Profile.styles'
import EditProfile from '../../components/profile/EditProfile'
import Logout from '../../components/logout/Logout'
import Uploads from '../../components/uploads/Uploads'
import Favourites from '../../components/favourites/Favourites'
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../store/user/user.slice';


function showEdit() {
  document.getElementById('edit1').style.display = 'block'
}

function showLogout() {
  document.getElementById('logout1').style.display = 'flex'
}

function showUploads() {
  document.getElementById('favourites1').style.display = 'none'
  document.getElementById('uploads1').style.display = 'block'
}

function showFavourites() {
  document.getElementById('uploads1').style.display = 'none'
  document.getElementById('favourites1').style.display = 'block'
}

function Profile() {
  const { displayName, description, photo } = useSelector((state) => state.user)

  return (
    <div>
      <LogoProfile to="/home" />
      <User
        onClick={showLogout}
        style={{
          backgroundImage: 'url(' + photo + ')',
          backgroundSize: '60px',
          objectFit: 'contain'
        }}
      />
      <Logout id="logout1" />
      <ProfileUser style={{ backgroundImage: 'url(' + photo + ')', backgroundSize: '150px', objectFit: 'contain' }} />
      <UsernameProfile id="user-name"> {displayName} </UsernameProfile>
      <EditProfileIcon onClick={showEdit} />
      <EditProfile id="edit1" />
      <DescProfile id="user-desc"> {description} </DescProfile>
      <ProfileButtons>
        <FavProfile onClick={showFavourites}>Favorites</FavProfile>
        <LiProfile onClick={showUploads}>Uploads</LiProfile>
      </ProfileButtons>
      <FavBoxProfile>
        <Uploads id="uploads1" />
        <Favourites id="favourites1" />
      </FavBoxProfile>
    </div>
  )
}

export default Profile
