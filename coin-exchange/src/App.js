import React from 'react'
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/coin'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1> 

      
      </header>
       <table className="coin-table"> 
       <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
       </thead>
       <tbody>
         <Coin name= "Bitcoin" ticker= "BTC" price={57000}/>
         <Coin name= "Ethereum" ticker= "ETH" price={1900}/>
         <Coin name= "Tether" ticker= "USDT" price= {0.8}/>
         <Coin name= "Ripple" ticker= "XRP" price={1.4}/>
       </tbody>
      </table>
    </div>
  );
}

export default App;
