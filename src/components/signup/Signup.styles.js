import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    
    a {
        text-decoration: none;
    }

    label {
        font-family: Roboto, sans-serif;
        font-size: 11pt;
    }
`

export const LoginCard = styled.div`
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
  padding-top: 60px;
`

export const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  height: 529px;
  margin: 6rem auto 8.1rem auto;
  width: 372px;
`

export const CardContent = styled.div`
  padding: 12px 44px;
`

export const CardTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  padding-bottom: 23px;
  padding-top: 13px;
  color: #6c4125;
`

/* The Close Button (x) */
export const Close = styled.span`
  float: right;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;

  &:hover {
    color: red;
    cursor: pointer;
  }
  &:focus {
    color: red;
    cursor: pointer;
  }
`

export const Btns = styled.div`
  display: flex;
`

export const LoginBtn = styled.input`
  background: #97694b;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-top: 50px;
  margin-right: 10px;
  margin-left: auto;
  margin-bottom: 0;
  padding: 20px;
  width: 270px;
`

export const SignUpBtn = styled.input`
  background: #6c4125;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-top: 50px;
  margin-right: auto;
  margin-left: 10px;
  margin-bottom: 0;
  padding: 20px;
  width: 270px;
`

export const Form = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

export const FormContent = styled.input`
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
  border-radius: 15px;
  width: 100%;
  height: 25px;
`
