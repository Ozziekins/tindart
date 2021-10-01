import styled, { createGlobalStyle } from 'styled-components'
import UserPhoto from '../../images/Userphoto.png'
import { Link } from 'react-router-dom'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const LogoutCard = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(255, 255, 255); /* Fallback color */
  background-color: rgba(103, 83, 69, 0.4); /* Black w/ opacity */
`

export const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  height: fit-content;
  width: fit-content;
  margin-top: 5%;
  margin-left: 65%;
`

export const CardContent = styled.div`
  padding: 12px 30px;
`

export const CardText = styled(Link)`
  color: #6c4125;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 30px;
  margin-top: 3px;
  text-align: left;

  text-decoration: none;

  &:hover {
    color: brown;
    cursor: pointer;
  }
  &:focus {
    color: brown;
    cursor: pointer;
  }
`

export const Close = styled.span`
  float: right;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
  text-align: right;

  &:hover {
    color: red;
    cursor: pointer;
  }
  &:focus {
    color: red;
    cursor: pointer;
  }
`
