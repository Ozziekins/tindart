import React from 'react'
import { Container, LiHome, LoginButton, Logo, NoDecorLink, SignUp, SwipeArt } from './Home.styles'
import {
  Btns,
  Card,
  CardContent,
  CardTitle,
  Form,
  FormContent,
  LoginCard,
  Close,
  LoginBtn,
  SignUpBtn,
  ForgotPass,
  ForgotPassA
} from '../login/Login.styles'

function showLogin() {
  document.getElementById('login1').style.display = 'block'
}

function hideLogin() {
  document.getElementById('login1').style.display = 'none'
}

function Home() {
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
        <SignUp>Sign up</SignUp>
      </Container>

      <LoginCard id="login1">
        <Card>
          <CardContent>
            <Close onClick={hideLogin} title="Close Login">
              &times;
            </Close>
            <CardTitle>
              <h2>Login</h2>
            </CardTitle>
            <Form method="post">
              <label htmlFor="user-name" style={{ paddingTop: '13px', color: '#ABAAAA' }}>
                &nbsp;User Name
              </label>
              <FormContent type="username" name="username" required />
              <label htmlFor="user-password" style={{ paddingTop: '22px', color: '#ABAAAA' }}>
                &nbsp;Password
              </label>
              <FormContent type="password" name="password" required />
              <ForgotPassA href="#">
                <ForgotPass id="forgot-pass">Forgot password?</ForgotPass>
              </ForgotPassA>
              <Btns>
                <LoginBtn type="submit" name="submit" value="Login" />
                <SignUpBtn type="submit" name="submit" value="Signup" />
              </Btns>
            </Form>
          </CardContent>
        </Card>
      </LoginCard>
    </div>
  )
}

export default Home
