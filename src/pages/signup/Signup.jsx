import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'
import { Btns, Card, CardContent, CardTitle, Close, Form, FormContent, LoginCard, SignUpBtn } from './Signup.styles'

function hideSignup() {
  document.getElementById('signup1').style.display = 'none'
}

function Signup() {
  const history = useHistory()
  const [error, setError] = useState()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    authService
      .registerUser(login, password)
      .then(() => history.replace('/login'))
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
          <Form onSubmit={onSubmit} error={error} defaultValues={{ login: '', password: '' }}>
            <label htmlFor="user-name" style={{ paddingTop: '13px', color: '#ABAAAA' }}>
              &nbsp;Username
            </label>
            <FormContent type="username" name="username" required />
            <label htmlFor="user-password" style={{ paddingTop: '22px', color: '#ABAAAA' }}>
              &nbsp;Password
            </label>
            <FormContent type="password" name="password" required />
            <Btns>
              {/* <LoginBtn type="submit" name="submit" value="Login" /> */}
              <SignUpBtn type="submit" name="submit" value="Signup" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
    </LoginCard>
  )
}

export default Signup
