import React from 'react'
import propTypes from 'prop-types'; 
import styled from 'styled-components'; 

const Td = styled.td`
border: 4px solid darkslategray; 
width: 30vh;
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
`;


export default function coin (props) {
    const handleClick = (event) => {
           event.preventDefault(); 
           props.handleRefresh(props.id); 
  
        }

        return (
            <tr className="coin-row">
              <Td>{props.rank}</Td>
              <Td>{props.name}</Td> 
              <Td>{props.ticker}</Td> 
              <Td>${props.price}</Td> 
             {props.showBalance ? <Td>{props.balance}</Td> : null }
              <Td>
                  <form action = "">
                   <Button onClick={handleClick}> Refresh </Button>
                  </form>
                  </Td>
            </tr>
        );

}

coin.propTypes = {
    name: propTypes.string.isRequired, 
    rank: propTypes.number.isRequired, 
    ticker: propTypes.string.isRequired, 
    price: propTypes.number.isRequired
}
