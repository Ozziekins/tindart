import React from 'react'
import {
  DescProfile,
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

function Profile() {
  return (
    <div>
      <LogoProfile to="/feed" />
      <User />
      <ProfileUser />
      <UsernameProfile>User Daryll</UsernameProfile>
      <DescProfile>Vestibulum dapibus sagittis odio, non vestibulum felis accumsan sit amet</DescProfile>
      <ProfileButtons>
        <FavProfile>Favorites</FavProfile>
        <LiProfile>Uploads</LiProfile>
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
