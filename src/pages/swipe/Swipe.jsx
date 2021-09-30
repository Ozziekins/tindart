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

function Swipe() {
  return (
    <div>
      <SwipeLogo to="/home" />
      <User
        to="/profile"
        style={{
          backgroundImage: 'url(' + window.sessionStorage.getItem('ProfilePhoto') + ')',
          backgroundSize: '60px',
          objectFit: 'contain'
        }}
      />

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
