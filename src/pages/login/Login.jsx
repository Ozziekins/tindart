import React from 'react'
import {
  Btns,
  Card,
  CardContent,
  CardTitle,
  Form,
  FormContent,
  LoginBtn,
  SignUpBtn,
  ForgotPass,
  ForgotPassA
} from './Login.styles'

function Login() {
  return (
    <Card>
      <CardContent>
        <CardTitle>
          <h2>Login</h2>
        </CardTitle>
        <Form method="post">
          <label htmlFor="user-name" style={{ paddingTop: '13px', color: '#ABAAAA' }}>
            &nbsp;User Name
          </label>
          <FormContent id="user-name" type="username" name="username" required />
          <label htmlFor="user-password" style={{ 'padding-top': '22px', color: '#ABAAAA' }}>
            &nbsp;Password
          </label>
          <FormContent id="user-password" type="password" name="password" required />
          <ForgotPassA href="#">
            <ForgotPass>Forgot password?</ForgotPass>
          </ForgotPassA>
          <Btns>
            <LoginBtn type="submit" name="submit" value="Login" />
            <SignUpBtn type="submit" name="submit" value="Signup" />
          </Btns>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Login
