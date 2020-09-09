import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    max-width: 555px;
    margin-bottom: 15px;


    input {
        appearance: none;
        min-width: 21px;
        height: 21px;
        border: 1px solid #828282;
        border-radius: 4px;
        margin-right: 20px;
        outline: none;
        cursor: pointer;
        transition: all .3s ease;
    }

    input:checked {
        background: #F2994A;
        border: 1px solid #F2994A;
    } 

    p {
        font-weight: 300;
        line-height: 25px;

        @media only screen and (max-width: 375px) {
            font-size: 14px;
        }
    }

`

const ListIngredient = ({Ingredient, id}) => {
    return ( 
        <Wrapper>
            <input type="checkbox"/>
            <p>{Ingredient}</p>
        </Wrapper>
        
     );
}
 
export default ListIngredient;