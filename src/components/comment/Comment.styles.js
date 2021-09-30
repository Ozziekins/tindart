import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Allerta');
    
    a {
        text-decoration: none;
    }

    label {
        font-family: Roboto, sans-serif;
        font-size: 11pt;
    }
`

export const CommentCard = styled.div`
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
  top: 20%;
  border-radius: 20px;
  height: 129px;
  margin: 6rem auto 8.1rem auto;
  width: 372px;
`

export const CardContent = styled.div`
  padding: 12px 44px;
`

export const Btns = styled.div`
  display: flex;
`

export const CommentBtn = styled.input`
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

export const CommentHeader = styled.h1`
  color: #97694b;
  font-family: Allerta, sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: xx-large;
`

export const CommentAndAuthor = styled.div`
  margin-top: 20px;
  border: 1px solid #6c4125;
  border-radius: 20px;
  padding: 10px;
`

export const SingleComment = styled.span`
  color: #000;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: medium;
`

export const CommentAuthor = styled.span`
  color: #000;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: medium;
`

export const CommentMenu = styled.span`
  height: 100%;
  width: 350px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding-top: 100px;
  margin-right: 20px;
  //border-left: 1px solid #6c4125;
`
