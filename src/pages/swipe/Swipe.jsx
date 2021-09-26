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
      <SwipeLogo to="/" />
      <User to="/profile" />

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
