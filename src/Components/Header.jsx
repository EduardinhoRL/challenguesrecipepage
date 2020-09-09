import React from 'react'
import dots from '../img/6dots.svg'

import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  margin-bottom: 12px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;    
  }

`

const Desc = styled.div`
  display: grid;
  grid-template-columns: 13px 1fr;
  grid-gap: 15px;

  p {
    max-width: 580px;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
  }
  
`


const Header = () => {
    return ( 
        <>
          <Title>Classic Cheesecake Recipe</Title>

          <Desc>
              <img src={dots} alt=""/>
              {/* <i className="fas fa-grip-horizontal"></i> */}
              <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
          </Desc>
        </>
     );
}
 
export default Header;