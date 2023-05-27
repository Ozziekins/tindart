import React from 'react'
import Signup from '../../components/signup/Signup'
import { Container, GlobalStyle, LoginButton, Logo, SignUp, SwipeArt } from './Home.styles'
import Login from '../../components/login/Login'

function showLogin() {
  document.getElementById('login1').style.display = 'block'
}

function showSignup() {
  document.getElementById('signup1').style.display = 'block'
}

function WelcomeHome() {
  return (
    <div>
      <Container>
        <GlobalStyle />
        <Logo />
        <ul />
        <LoginButton onClick={showLogin}> Log in </LoginButton>
        <SwipeArt>Swipe Art</SwipeArt>
        <SignUp onClick={showSignup}>Sign up</SignUp>
      </Container>

      <Login id="login1" />

      <Signup id="signup1" />
    </div>
  )
}

export default WelcomeHome
