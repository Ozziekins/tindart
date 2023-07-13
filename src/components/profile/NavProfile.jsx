import React from 'react'
import { Card, CardContent, CardText, CardTextContent, Close, GotoProfileCard } from './NavProfile.styles'
import authService from '../../services/authService'

export function hideProfile() {
  document.getElementById('profile1').style.display = 'none'
}

function logoutUser() {
  authService.logout()
  window.sessionStorage.setItem('isLoggedIn', false)
  hideProfile()
}

function NavProfile(props) {
  let leftValue, topValue;

  if (props.currentPage === 'auction') {
    leftValue = '90%';
    topValue = '0%';
  } else if (props.currentPage === 'feed' || props.currentPage === 'swipe') {
    leftValue = '75%';
    topValue = '0';
  } else if (props.currentPage === 'home') {
    leftValue = '80%';
    topValue = '0%';
  }
  
  return (
    <GotoProfileCard id="profile1">
      <Card left={leftValue} top={topValue}>
        <CardContent>
          <Close onClick={hideProfile} title="Hide Profile">
            &times;
          </Close>
          <CardTextContent>
            <CardText to="/profile">Profile</CardText>
            <CardText to="/" onClick={logoutUser}>
              Logout
            </CardText>
          </CardTextContent>
        </CardContent>
      </Card>
    </GotoProfileCard>
  )
}

export default NavProfile
