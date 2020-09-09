import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 50px 40px; 
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    height: 367px;
    display: grid;
    grid-gap: 45px;
    color: #333;

    @media only screen and (max-width: 1024px) {
        grid-area: info; 
        padding:  30px 0; 
        height: auto;
        box-shadow: unset; 
        grid-gap: 15px;
        grid-template-areas: "yields yields yields" "prep cook time" ;
        
        && > div:nth-child(1) {
           grid-area: yields;
        }
        && > div:nth-child(2) {
           grid-area: prep;
        }
        && > div:nth-child(3) {
           grid-area: cook;
        }
        && > div:nth-child(4) {
           grid-area: time;
        }
    }

    div{ 
        display: grid;
        grid-template-columns: 30px 1fr;

        @media only screen and (max-width: 425px) {
            grid-template-columns: 15px 1fr;
        }
    }

    i {
        font-size: 25px;
        padding-top: 5px;

        @media only screen and (max-width: 425px) {
            font-size: 15px;
        }
    }
    div:nth-child(1) i, div:nth-child(1) p {
        color: #F2994A;
    }
    span {
        color: #BDBDBD;
        text-transform: uppercase;
        font-size: 10px;

        @media only screen and (max-width: 425px) {
            font-size: 7px;
        }
    }

    p {
        font-size: 14px;

        @media only screen and (max-width: 425px) {
            font-size: 11px;
        }
    }

    div div {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
    }
`

const Info = () => {
    return ( 
        <Wrapper>
            <div>
                <i className="fas fa-utensils"></i>
                <div>
                    <span>yields</span>
                    <p>12 servings</p>
                </div>
            </div>
            <div>
                <i className="far fa-clock"></i>
                <div>
                    <span>Prep TIme</span>
                    <p>45 minutes</p>
                </div>
            </div>
            <div>
                <i className="far fa-clock"></i>
                <div>
                    <span>Cook Time</span>
                    <p>1 hour</p>
                </div>
            </div>
            <div>
                <i className="far fa-clock"></i>
                <div>
                    <span>Total Tim</span>
                    <p>7,75 hours</p>
                </div>
            </div>
           
        </Wrapper>
     );
}
 
export default Info;