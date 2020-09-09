import React from 'react';
import Header from './Components/Header' 
import Content from './Components/Content'

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 50px auto;
  padding: 0 10px;

  @media only screen and (max-width: 768px) {
    margin: 10px auto;
  }

`


function App() {
  return (
      <Container>
        <Header />
        <Content />
      </Container>
  );
}

export default App;
