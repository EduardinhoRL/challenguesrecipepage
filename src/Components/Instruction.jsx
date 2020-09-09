import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 555px;
    display: flex;
    margin-bottom: 15px;
 
    span {
        background: #F2994A;
        display: block;
        border-radius: 6px;
        color: #fff;
        min-width: 35px;
        line-height: 35px;
        max-height: 35px;
        text-align: center;
        flex-wrap: wrap;
        margin-right: 15px;
    }

    p {
        font-weight: 300;
        line-height: 25px;

        @media only screen and (max-width: 375px) {
            font-size: 14px;
        }
    }

`

const Instruction = ({instruction, id}) => {
    return ( 
        <Wrapper>

                <span>{id}</span>
                <p>{instruction}</p>

        </Wrapper>
     );
}
 
export default Instruction;