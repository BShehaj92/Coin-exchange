import React, { Component } from 'react'
import propTypes from 'prop-types'; 
import styled from 'styled-components'; 

const Td = styled.td`
border: 2px solid darkslategray; 
width: 30vh;
`;

export default class coin extends Component {
    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
           event.preventDefault(); 
           this.props.handleRefresh(this.props.ticker); 
  
        }

    render() {
        return (
            <tr className="coin-row">
              <Td>{this.props.name}</Td> 
              <Td>{this.props.ticker}</Td> 
              <Td>${this.props.price}</Td> 
              <Td>
                  <form action = "#" method = "POST">
                   <button onClick={this.handleClick}> Refresh </button>
                  </form>
                  </Td>
            </tr>
        );
    }
}

coin.propTypes = {
    name: propTypes.string.isRequired, 
    ticker: propTypes.string.isRequired, 
    price: propTypes.number.isRequired
}
