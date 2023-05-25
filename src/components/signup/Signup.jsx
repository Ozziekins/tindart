import React, { useState } from 'react'
import authService from '../../services/authService'
import { Btns, Card, CardContent, CardTitle, Close, Form, FormContent, SignupCard, SignUpBtn } from './Signup.styles'

export function hideSignup() {
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
    <SignupCard id="signup1">
      <Card>
        <CardContent>
          <Close onClick={hideSignup} title="Close Signup">
            &times;
          </Close>
          <CardTitle>
            <h2>Sign up</h2>
          </CardTitle>
          <Form onSubmit={onSubmit} error={error} defaultvalues={{ username: '', password: '' }}>
            <label htmlFor="usernameSignup" style={{ paddingTop: '13px', color: '#ABAAAA' }}>
              &nbsp;Username
            </label>
            <FormContent
              id="usernameSignup"
              name="username"
              value={username}
              label="Username"
              rules={{ required: { message: 'Username is required', value: true } }}
              onChange={({ target }) => setUsername(target.value)}
              autoComplete="on"
            />
            <label htmlFor="passwordSignup" style={{ paddingTop: '22px', color: '#ABAAAA' }}>
              &nbsp;Password
            </label>
            <FormContent
              id="passwordSignup"
              name="password"
              value={password}
              label="Password"
              type="password"
              rules={{ required: { message: 'Password is required', value: true } }}
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="on"
            />
            <Btns>
              <SignUpBtn type="submit" name="submit" value="Signup" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
    </SignupCard>
  )
}

export default Signup
