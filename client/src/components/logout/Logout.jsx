import React from 'react'
import { Card, CardContent, CardText, Close, LogoutCard } from './Logout.styles'
import authService from '../../services/authService'

export function hideLogout() {
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
          <CardText to="/" onClick={logoutUser}>
            {' '}
            Logout{' '}
          </CardText>
        </CardContent>
      </Card>
    </LogoutCard>
  )
}

export default Logout
