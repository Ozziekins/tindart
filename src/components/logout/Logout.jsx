import React, { useEffect, useState, useRef } from 'react'
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
  const logoutRef = useRef(null);

  const handleClickOutside = (event) => {
    if (logoutRef.current && !logoutRef.current.contains(event.target)) {
      hideLogout();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <LogoutCard id="logout1">
      <Card ref={logoutRef}>
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
