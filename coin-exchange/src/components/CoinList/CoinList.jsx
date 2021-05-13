import React from 'react'
import Coin from '../Coin/coin'
import styled from 'styled-components'

const Table = styled.table`
margin: 50px auto 50px auto; 
display: inline-block;
font-size: 1.3rem;
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

export default function CoinList (props) {
      return (
            <Table> 
            <thead>
             <tr>
               <th>Rank</th>
               <th>Name</th>
               <th>Ticker</th>
               <th>Price</th>
               {props.showBalance ? <th>Balance</th> : null} 
               <th>Action</th>
            
             </tr>
            </thead>
            <tbody>
              {
              props.coinData.map( ({key, rank, name,ticker,price,balance}) =>
              <Coin key = {key} 
                    id = {key}
                    handleRefresh = {props.handleRefresh}
                    rank = {rank}
                    name = {name} 
                    ticker = {ticker} 
                    showBalance = {props.showBalance}
                     price = {price}
                     balance = {balance}
                    /> 
                )
              }
            </tbody>
           </Table>
        )
}
