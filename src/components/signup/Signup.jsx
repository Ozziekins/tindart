import React, { useState } from 'react'
import authService from '../../services/auth.service'
import { Btns, Card, CardContent, CardTitle, Close, Form, FormContent, LoginCard, SignUpBtn } from './Signup.styles'

function hideSignup() {
  document.getElementById('signup1').style.display = 'none'
}

function Signup() {
  const [error, setError] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    authService
      .signupUser(username, password)
      .then(() => hideSignup())
      .catch(() => setError(error))
  }

  return (
    <LoginCard id="signup1">
      <Card>
        <CardContent>
          <Close onClick={hideSignup} title="Close Signup">
            &times;
          </Close>
          <CardTitle>
            <h2>Sign up</h2>
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
            <Btns>
              <SignUpBtn type="submit" name="submit" value="Signup" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
    </LoginCard>
  )
}

export default Signup
