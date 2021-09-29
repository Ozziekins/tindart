import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'
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

function hideLogin() {
  document.getElementById('login1').style.display = 'none'
}

function Login() {
  const history = useHistory()
  const [error, setError] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    authService
      .loginUser(username, password)
      .then(() => {
        window.sessionStorage.setItem('isLoggedIn', true)
        history.replace('/feed')
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
          <Form onSubmit={onSubmit} error={error} defaultValues={{ username: '', password: '' }}>
            <label htmlFor="username" style={{ paddingTop: '13px', color: '#ABAAAA' }}>
              &nbsp;Username
            </label>
            <FormContent
              id="username"
              name="username"
              value={username}
              label="Username"
              rules={{ required: { message: 'Username is required', value: true } }}
              onChange={({ target }) => setUsername(target.value)}
            />
            <label htmlFor="password" style={{ paddingTop: '22px', color: '#ABAAAA' }}>
              &nbsp;Password
            </label>
            <FormContent
              name="password"
              value={password}
              label="Password"
              type="password"
              rules={{ required: { message: 'Password is required', value: true } }}
              onChange={({ target }) => setPassword(target.value)}
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
