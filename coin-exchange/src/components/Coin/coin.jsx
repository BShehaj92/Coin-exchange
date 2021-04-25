import React, { Component } from 'react'
import './coin.css';
import propTypes from 'prop-types'; 

export default class coin extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            price: this.props.price
        }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
           event.preventDefault(); 
      
            const randomPercentage = 0.995 + Math.random() * 0.01; 
            this.setState( function(oldState) {
                return {
                    price: oldState.price * randomPercentage
                }; 
            }); 
         }
    

    render() {
        return (
            <tr className="coin-row">
              <td>{this.props.name}</td> 
              <td>{this.props.ticker}</td> 
              <td>${this.state.price}</td> 
              <td>
                  <form action = "#" method = "POST">
                   <button onClick={this.handleClick}> Refresh </button>
                  </form>
                  </td>
            </tr>
        );
    }
}

coin.propTypes = {
    name: propTypes.string.isRequired, 
    ticker: propTypes.string.isRequired, 
    price: propTypes.number.isRequired
}
