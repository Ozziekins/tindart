import React from 'react'
import {
  CardSwipe,
  SwipeButtons,
  SwipeFave,
  SwipeInfo,
  SwipeLike,
  SwipeLogo,
  SwipeNext,
  SwipeNope,
  SwipeTitle,
  User
} from './Swipe.styles'
import { useSelector } from 'react-redux'
import NavProfile from '../../components/profile/NavProfile'

function showProfile() {
  document.getElementById('profile1').style.display = 'block'
}

function Swipe() {
  const { username, description, photo } = useSelector((state) => state.user)

  return (
    <div>
      <SwipeLogo to="/home" />
      <User
        onclick={showProfile}
        style={{
          backgroundImage: 'url(' + photo + ')',
          backgroundSize: '60px',
          objectFit: 'contain'
        }}
      />
      <NavProfile id="profile1" />

      <CardSwipe>
        <SwipeTitle>Art title</SwipeTitle>
        <SwipeButtons>
          <SwipeNope />
          <SwipeLike />
          <SwipeInfo />
          <SwipeFave />
          <SwipeNext />
        </SwipeButtons>
      </CardSwipe>
    </div>
  )
}

export default Swipe
