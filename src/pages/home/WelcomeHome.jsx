import React from 'react'
import Signup from '../../components/signup/Signup'
import { Container, Guest, GlobalStyle, HeaderWrapper, LoginButton, Logo, SignUp, SignUpOpts, SwipeArt } from './Home.styles'
import Login from '../../components/login/Login'
import { Link } from 'react-router-dom';

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
        <HeaderWrapper>
          <Logo />
          <ul />
          <LoginButton onClick={showLogin}> Log in </LoginButton>
          <SwipeArt>Swipe Art</SwipeArt>
        </HeaderWrapper>
        <SignUpOpts>
          <SignUp onClick={showSignup}>Sign up</SignUp>
          <Guest as={Link} to="/home">Guest</Guest>
        </SignUpOpts>
      </Container>

      <Login id="login1" />

      <Signup id="signup1" />
    </div>
  )
}

export default WelcomeHome
