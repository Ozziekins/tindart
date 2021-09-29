import React, { useState } from 'react'
import { Card, CardContent, CardText, Close, LogoutCard } from './Logout.styles'
import authService from '../../services/auth.service'
import { useHistory } from 'react-router-dom'

function hideLogout() {
  document.getElementById('logout1').style.display = 'none'
}

function logoutUser() {
  authService.logout()
  window.sessionStorage.setItem('isLoggedIn', false)
  hideLogout()
}

function Logout() {
  return (
    <LogoutCard id="logout1">
      <Card>
        <CardContent>
          <Close onClick={hideLogout} title="Hide Logout">
            &times;
          </Close>
          <CardText to="/welcome" onClick={logoutUser}>
            {' '}
            Logout{' '}
          </CardText>
        </CardContent>
      </Card>
    </LogoutCard>
  )
}

export default Logout
