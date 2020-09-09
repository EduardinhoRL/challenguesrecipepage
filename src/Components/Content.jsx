import React from 'react'
import photo from '../img/photo1.png'
import Ingredients from './Ingredients'
import Info from './Info'

import styled from 'styled-components'
import Instructions from './Instructions'

const Cakeimg = styled.img`
    width: 100%;
    margin: 50px 0;

    @media only screen and (max-width: 1024px) {
        margin: 50px 0 0 0;
    }

`
const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 216px;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-areas: "info" "ingredients" "instructions";      
    }
`

const Content = () => {
    return ( 
        <>
            <Cakeimg src={photo} alt=""/>
            <Container>
                <Ingredients />
                <Info />
                <Instructions />
            </Container>
        </>
     );
}
 
export default Content;