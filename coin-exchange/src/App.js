import React from 'react'
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
background-color:lightseagreen;
color:darkslategray;
     `;

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      balance:10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC', 
          price: 57000
        },
        {
          name: 'Ethereum',
          ticker: 'ETH', 
          price: 1900
        },
        {
          name: 'Tether',
          ticker: 'USDT', 
          price: 0.8
        },
        {
          name: 'Ripple',
          ticker: 'XRP', 
          price: 1.4
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH', 
          price: 721, 
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map(function ({ticker, name, price}) {
     let newPrice = price; 
     if(valueChangeTicker === ticker) {
      const randomPercentage = 0.995 + Math.random() * 0.01;
      newPrice = newPrice * randomPercentage; 
      }
      return {
        ticker,
        name, 
        price: newPrice
      }

    });
      this.setState({coinData: newCoinData}); 
  }
 
  render () {
    return (
    <Div className="App">
       <AppHeader />
       <AccountBalance amount={this.state.balance}/>
       <CoinList coinData ={this.state.coinData} handleRefresh = {this.handleRefresh}/>    
    </Div>
  );
  }
  
}

export default App;
