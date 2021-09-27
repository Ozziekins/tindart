import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'
import Signup from '../signup/Signup'
import { Container, LiHome, LoginButton, Logo, NoDecorLink, SignUp, SwipeArt } from './Home.styles'
import Login from '../login/Login'

function showLogin() {
  document.getElementById('login1').style.display = 'block'
}

function showSignup() {
  document.getElementById('signup1').style.display = 'block'
}

function Home() {
  const history = useHistory()
  const [error, setError] = useState()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    authService
      .loginUser(login, password)
      .then(() => {
        history.replace('/')
      })
      .catch(() => setError(error))
  }

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
        <LoginButton onClick={showLogin}> Log in </LoginButton>
        {/* <a onclick="document.getElementById('login1').style.display='block'" className="login">Log in</a> */}
        <SwipeArt>Swipe Art</SwipeArt>
        <SignUp onClick={showSignup}>Sign up</SignUp>
      </Container>

      <Login id="login1" />

      <Signup id="signup1" />
    </div>
  )
}

export default Home
