import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'
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
  ForgotPass,
  ForgotPassA
} from './Login.styles'

export function hideLogin() {
  document.getElementById('login1').style.display = 'none'
}

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    authService
      .loginUser(username, password)
      .then(() => {
        window.sessionStorage.setItem('isLoggedIn', true)
        hideLogin()
        navigate('/home')
      })
      .catch(() => setError(error))
  }

  return (
    <LoginCard id="login1">
      <Card>
        <CardContent>
          <Close onClick={hideLogin} title="Close Login">
            &times;
          </Close>
          <CardTitle>
            <h2>Login</h2>
          </CardTitle>
          <Form onSubmit={onSubmit} error={error} defaultvalues={{ username: '', password: '' }}>
            <label htmlFor="usernameLogin" style={{ paddingTop: '13px', color: '#ABAAAA' }}>
              &nbsp;Username
            </label>
            <FormContent
              id="usernameLogin"
              name="username"
              value={username}
              label="Username"
              rules={{ required: { message: 'Username is required', value: true } }}
              onChange={({ target }) => setUsername(target.value)}
              autoComplete="on"
            />
            <label htmlFor="passwordLogin" style={{ paddingTop: '22px', color: '#ABAAAA' }}>
              &nbsp;Password
            </label>
            <FormContent
              id="passwordLogin"
              name="password"
              value={password}
              label="Password"
              type="password"
              rules={{ required: { message: 'Password is required', value: true } }}
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="on"
            />
            <ForgotPassA href="#">
              <ForgotPass id="forgot-pass">Forgot password?</ForgotPass>
            </ForgotPassA>
            <Btns>
              <LoginBtn type="submit" name="submit" value="Login" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
    </LoginCard>
  )
}

export default Login
