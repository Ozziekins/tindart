import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const GotoProfileCard = styled.div`
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
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 60%;
  border-radius: 20px;
  height: fit-content;
  width: fit-content;
  margin: 20px;
  float: right;
`

export const CardContent = styled.div`
  padding: 12px 30px;
`

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardText = styled(Link)`
  color: #6c4125;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
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

export const Close = styled.p`
  float: right;
  top: 0;
  padding-left: 10px;
  margin-top: 0;
  color: #000;
  font-size: 22px;
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
