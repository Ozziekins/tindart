import React from 'react';
import { Container, GlobalStyle, LogoFourOhFour, FourOhFour } from './Home.styles';

function NotFound() {
  return (
    <Container>
      <GlobalStyle />
      <LogoFourOhFour to="/home" />
      <FourOhFour>404 - Not Found</FourOhFour>
    </Container>
  );
}

export default NotFound;
