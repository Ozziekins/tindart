import React from 'react'
import { ContactLink, Container, User, LiHome, Logo, NoDecorLink, SwipeArt } from './Home.styles'

function AuthorizedHome() {
  return (
    <div>
      <Container>
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
            to="/profile"
            style={{
              backgroundImage: 'url(' + window.sessionStorage.getItem('ProfilePhoto') + ')',
              backgroundSize: '60px',
              objectFit: 'contain'
            }}
          />
        </ul>
        <SwipeArt>Swipe Art</SwipeArt>
      </Container>
    </div>
  )
}

export default AuthorizedHome
