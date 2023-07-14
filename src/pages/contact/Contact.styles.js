import styled from 'styled-components';
import { Link } from 'react-router-dom'
import UserPhoto from '../../images/Userphoto.png'
import LogoPages from '../../images/Logo-pages6.png'

export const ContactContainer = styled.div`
  margin: 50px auto;
  max-width: 500px;
`;

export const User = styled.div`
  position: absolute;
  left: 70%;
  float: right;
  margin-top: 20px;
  //margin-right: 500px;
  background-color: grey;
  background-image: url(${UserPhoto});
  border-radius: 50%;
  width: 60px;
  height: 60px;
`

export const LogoContact = styled(Link)`
  float: left;
  top: 20px;
  margin-left: 300px;
  background-image: url(${LogoPages});
  width: 450px;
  height: 80px;
`

export const MessageTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #6c4125;
  border-radius: 10px;
  resize: none;
`;

export const SendButton = styled.button`
  background-color: #6c4125;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;
