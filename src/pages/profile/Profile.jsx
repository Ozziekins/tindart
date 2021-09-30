import React, { useState } from 'react'

import {
  DescProfile,
  EditProfileIcon,
  FavBoxProfile,
  FavProfile,
  LiFavProfileBox1,
  LiFavProfileBox2,
  LiFavProfileBox3,
  LiProfile,
  LogoProfile,
  ProfileButtons,
  ProfileUser,
  User,
  UsernameProfile
} from './Profile.styles'
import EditProfile from '../../components/profile/EditProfile'
import ProfilePhoto from '../../images/Profile photo PROFILE.png'
import Logout from '../../components/logout/Logout'
import Uploads from '../../components/uploads/Uploads'
import Favourites from '../../components/favourites/Favourites'

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
  const [username, setUsername] = useState('User Daryll')
  const [description, setDescription] = useState(
    'Vestibulum dapibus sagittis odio, non vestibulum felis accumsan sit amet'
  )
  const [uploadedImage, setUploadedImage] = useState(ProfilePhoto)

  const getUserInfo = (name, desc, uploadedImg) => {
    setUsername(name)
    setDescription(desc)
    setUploadedImage(uploadedImg)
    window.sessionStorage.setItem('ProfilePhoto', uploadedImg)
  }

  return (
    <div>
      <LogoProfile to="/home" />
      <User
        onClick={showLogout}
        style={{
          backgroundImage: 'url(' + window.sessionStorage.getItem('ProfilePhoto') + ')',
          backgroundSize: '60px',
          objectFit: 'contain'
        }}
      />
      <Logout id="logout1" />
      <ProfileUser
        style={{ backgroundImage: 'url(' + uploadedImage + ')', backgroundSize: '150px', objectFit: 'contain' }}
      />
      <UsernameProfile> {username} </UsernameProfile>
      <EditProfileIcon onClick={showEdit} />
      <EditProfile id="edit1" getUserInfo={getUserInfo} />
      <DescProfile> {description} </DescProfile>
      <ProfileButtons>
        <FavProfile onClick={showFavourites}>Favorites</FavProfile>
        <LiProfile onClick={showUploads}>Uploads</LiProfile>
      </ProfileButtons>
      <FavBoxProfile>
        {/*<LiFavProfileBox1 />*/}
        {/*<LiFavProfileBox2 />*/}
        {/*<LiFavProfileBox3 />*/}
        <Uploads id="uploads1" />
        <Favourites id="favourites1" />
      </FavBoxProfile>
    </div>
  )
}

export default Profile
