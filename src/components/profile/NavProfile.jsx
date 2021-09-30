import React from 'react'
import { Card, CardContent, CardText, Close, GotoProfileCard } from './NavProfile.styles'

function hideProfile() {
  document.getElementById('profile1').style.display = 'none'
}

function NavProfile() {
  return (
    <GotoProfileCard id="profile1">
      <Card>
        <CardContent>
          <Close onClick={hideProfile} title="Hide Profile">
            &times;
          </Close>
          <CardText to="/profile">Profile</CardText>
        </CardContent>
      </Card>
    </GotoProfileCard>
  )
}

export default NavProfile
