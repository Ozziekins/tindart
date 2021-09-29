import React from 'react'
import Signup from '../../components/signup/Signup'
import { Container, LiHome, LoginButton, Logo, NoDecorLink, SignUp, SwipeArt } from './Home.styles'
import Login from '../../components/login/Login'
import authService from '../../services/auth.service'

function showLogin() {
  document.getElementById('login1').style.display = 'block'
}

function showSignup() {
  document.getElementById('signup1').style.display = 'block'
}

function Home() {
  if (authService.isAuthorized()) {
    return (
      <div>
        <Container>
          <Logo />
          <ul>
            <LiHome>
              <NoDecorLink to="/feed">Feed</NoDecorLink>
            </LiHome>
            <LiHome>
              <NoDecorLink to="/swipe">Swipe</NoDecorLink>
            </LiHome>
            <LiHome>
              <NoDecorLink to="/auction">Auction</NoDecorLink>
            </LiHome>
            <LiHome>
              <NoDecorLink>Contact</NoDecorLink>
            </LiHome>
          </ul>
          <SwipeArt>Swipe Art</SwipeArt>
        </Container>
      </div>
    )
  }
  return (
    <div>
      <Container>
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

export default Home
