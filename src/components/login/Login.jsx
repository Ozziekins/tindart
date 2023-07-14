import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'
import Loading from '../loading/Loading';
import { setUser } from '../../store/user/user.slice'
import { useDispatch } from 'react-redux'
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
  ForgotPassA,
  ErrorAlert
} from './Login.styles'

export function hideLogin() {
  document.getElementById('login1').style.display = 'none'
}

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [forgotPassAlert, setForgotPassAlert] = useState('');

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
  
    authService
      .loginUser(username, password, dispatch)
      .then(() => {
        window.sessionStorage.setItem('isLoggedIn', true);
        hideLogin();
        dispatch(
          setUser({
            username: username
          })
        );
        navigate('/home');
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }

  const loginRef = useRef(null);

  const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      hideLogin();
      setForgotPassAlert('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleForgotPassClick = (e) => {
    e.preventDefault();
    setForgotPassAlert('Feature in progress, please sign up again or continue as a guest');
  };

  return (
    <LoginCard id="login1">
      <Card ref={loginRef}>
        <CardContent>
          <Close onClick={hideLogin} title="Close Login">
            &times;
          </Close>
          <CardTitle>
            <h2>Login</h2>
          </CardTitle>
          {error && <ErrorAlert>{error}</ErrorAlert>} {/* Display error alert */}
          {forgotPassAlert && <ErrorAlert>{forgotPassAlert}</ErrorAlert>}
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
            <ForgotPassA 
              href="#"
              onClick={handleForgotPassClick}
            >
              <ForgotPass id="forgot-pass">Forgot password?</ForgotPass>
            </ForgotPassA>
            <Btns>
              <LoginBtn type="submit" name="submit" value="Login" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
      {isLoading && <Loading />}
    </LoginCard>
  )
}

export default Login
