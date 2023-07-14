import React, { useState } from 'react';
import {
  ContactContainer,
  LogoContact,
  User,
  MessageTextarea,
  SendButton,
} from './Contact.styles';
import authService from '../../services/authService';
import NavProfile from '../../components/profile/NavProfile'
import { useSelector } from 'react-redux';

function showProfile() {
    document.getElementById('profile1').style.display = 'block'
    }

function Contact() {
  const { photo } = useSelector((state) => state.user)
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    authService.sendMessage(message);
    setMessage('');
  };

  return (
    <div>
        <div style={{ display: 'inline-flex' }}>
            <LogoContact to="/home" />
            <User
            onClick={showProfile}
            style={{
                backgroundImage: 'url(' + photo + ')',
                backgroundSize: '60px',
                objectFit: 'contain'
            }}
            />
            <NavProfile id="profile1" currentPage="feed" />
        </div>

        <ContactContainer>
        <MessageTextarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here"
            rows={5}
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
        </ContactContainer>
    </div>
  );
}

export default Contact;
