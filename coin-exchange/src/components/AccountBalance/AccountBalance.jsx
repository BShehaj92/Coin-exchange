import React, { Component } from 'react'
import propTypes from 'prop-types'; 
import styled from 'styled-components'

const Section = styled.section`
text-shadow: -1px 0px 3px #193c52;                          
font-family: Georgia, serif;
font-size: 21px;
letter-spacing: -0.4px;
word-spacing: 2px;
color: #000000;
font-weight: 700;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: none;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
              ${this.props.amount}   
            </Section>
        )
    }
}


AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}