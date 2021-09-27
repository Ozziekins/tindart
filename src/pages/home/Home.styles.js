import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import Background from '../../images/background.png'
import LogoPic from '../../images/Logo.png'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Allerta');
`

export const NoDecorLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${Background});
  margin-top: 0px;
`

export const LiHome = styled.li`
  position: relative;
  top: 20px;
  display: inline;
  margin-left: 100px;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
`

export const Logo = styled.div`
  margin-left: 45px;
  float: left;
  background-image: url(${LogoPic});
  width: 310px;
  height: 80px;
`

export const LoginButton = styled.button`
  float: right;
  width: 88px;
  text-align: center;
  margin-right: 30px;
  padding: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  border-radius: 10px;
  background-color: white;
  margin-top: -30px;
  color: #6c4125;
`

export const SwipeArt = styled.div`
  position: absolute;
  width: 700px;
  height: 184px;
  left: 620px;
  top: 397px;

  font-family: Allerta, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 184px;
  /* identical to box height */

  color: #ffffff;
`

export const SignUp = styled.div`
  position: absolute;
  width: 189px;
  height: 55px;
  left: 770px;
  top: 611px;
  background: #6c4125;
  border-radius: 50px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;

  color: #ffffff;

  text-align: center;
  padding-top: 20px;
`
