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

export const EditCard = styled.div`
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
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  height: 540px;
  margin: 6rem auto 8.1rem auto;
  width: 472px;
`

export const CardContent = styled.div`
  position: relative;
  padding: 12px 44px;
`

export const CardTitle = styled.div`
  position: relative;
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

export const Btns = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
`

export const EditBtn = styled.input`
  background: #97694b;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;

  margin-top: 30px;
  padding: 20px;

  width: fit-content;
`

export const Form = styled.form`
  position: relative;
  top: 70%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

export const FormContent = styled.input`
  position: relative;
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
  border-radius: 15px;
  width: 100%;
  height: 25px;
`

export const UploadPhoto = styled.div`
  position: relative;
`

export const ProfileUser = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`

export const UploadBackground = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  left: 70%;
  background: gray;
  border-radius: 50%;
`
