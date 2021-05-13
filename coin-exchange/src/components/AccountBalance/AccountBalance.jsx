import React from 'react'
import propTypes from 'prop-types'; 
import styled from 'styled-components'

const Section = styled.section`
text-shadow: -1px 0px 3px #193c52;                          
font-family: Georgia, serif;
font-size: 21px;
letter-spacing: -0.4px;
word-spacing: 2px;
color: #fff;
font-weight: 700;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: none;
`;

const Button = styled.button`
height: 2rem;
width: 100%;
background-color: #282c34;
color: #FF5533;
border: none;
font-size: 1rem;
:active {
    background: #0053ba;
}
:hover {
    border: 1px solid #cccccc;
    border-radius: 3px;
    cursor: pointer;
}
`



export default function AccountBalance (props) {
     
        const buttonBalance = props.showBalance ? 'Hide Balance' : 'Show Balance'; 
        let content = null; 
        if(props.showBalance) {
             content = <> Balance: ${props.amount}</>;
        }
        return (
            <Section>  
              {content}
              <Button onClick={props.handleBalanceVisibility}>{buttonBalance}</Button>
            </Section>
        )
    
}

AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}