import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import Background from '../../images/background.png'
import LogoPic from '../../images/Logo.png'
import UserPhoto from '../../images/Userphoto.png'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Allerta');
  
    html {
      background: url(${Background}) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NoDecorLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`

export const Container = styled.div`
  width: 100%;
  height: 900px;
`

export const User = styled.div`
  float: right;
  margin-top: 15px;
  margin-right: 45px;
  background-color: grey;
  background-image: url(${UserPhoto});
  border-radius: 50%;
  width: 60px;
  height: 60px;
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
  height: 42px;
  text-align: center;
  margin-right: 30px;
  padding: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  border-radius: 10px;
  background-color: white;
  margin-top: 15px;
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
  // position: absolute;
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

export const Guest = styled.div`
  // position: absolute;
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
  text-decoration: none;
`

export const SignUpOpts = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35%;
  margin-left: 20%;
  margin-right: 15%;
`

export const ContactLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`

export const FourOhFour = styled.div`
  position: absolute;
  width: 700px;
  height: 184px;
  left: 620px;
  top: 397px;

  font-family: Allerta, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 184px;
  /* identical to box height */

  color: #ffffff;
`

export const LogoFourOhFour = styled(Link)`
  margin-left: 45px;
  float: left;
  background-image: url(${LogoPic});
  width: 310px;
  height: 80px;
`