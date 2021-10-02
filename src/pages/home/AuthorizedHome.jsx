import React from 'react'
import { ContactLink, Container, GlobalStyle, User, LiHome, Logo, NoDecorLink, SwipeArt } from './Home.styles'
import { useSelector } from 'react-redux'
import NavProfile from '../../components/profile/NavProfile'

function showProfile() {
  document.getElementById('profile1').style.display = 'block'
}

function AuthorizedHome() {
  const { photo } = useSelector((state) => state.user)

  return (
    <div>
      <Container>
        <GlobalStyle />
        <Logo />
        <ul>
          <LiHome>
            <NoDecorLink to="/feed">Feed</NoDecorLink>
          </LiHome>
          <LiHome>
            <NoDecorLink to="/swipe">Swipe</NoDecorLink>
          </LiHome>
          <LiHome>
            <NoDecorLink to="/auction">Auction</NoDecorLink>
          </LiHome>
          <LiHome>
            <ContactLink href="https://forms.gle/8bSFaKFEiJCyKb3fA">Contact</ContactLink>
          </LiHome>
          <User
            onClick={showProfile}
            style={{
              backgroundImage: 'url(' + photo + ')',
              backgroundSize: '60px',
              objectFit: 'contain'
            }}
          />
          <NavProfile id="profile1" />
        </ul>
        <SwipeArt>Swipe Art</SwipeArt>
      </Container>
    </div>
  )
}

export default AuthorizedHome
