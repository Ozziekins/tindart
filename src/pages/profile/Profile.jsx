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

function showEdit() {
  document.getElementById('edit1').style.display = 'block'
}

function showLogout() {
  document.getElementById('logout1').style.display = 'flex'
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
        <FavProfile to="/favourites">Favorites</FavProfile>
        <LiProfile to="/uploads">Uploads</LiProfile>
      </ProfileButtons>
      <FavBoxProfile>
        <LiFavProfileBox1 />
        <LiFavProfileBox2 />
        <LiFavProfileBox3 />
      </FavBoxProfile>
    </div>
  )
}

export default Profile
