import React, {useState, useEffect} from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';
import axios from 'axios'; 


const Div = styled.div`
text-align: center;
background-color:#FF5533;
color:darkslategray;
     `;


const COIN_COUNT = 10;
const coinsUrl = 'https://api.coinpaprika.com/v1/coins';
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';

function App (props) {
  const [balance, setBalance] = useState(10000); 
  const [showBalance, setShowBalance] = useState (true); 
  const [coinData, setCoinData] = useState ([]);

  const componentDidMount = async () => {
    const response = await axios.get( coinsUrl );
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );
    const promises = coinIds.map( id => axios.get( tickerUrl + id ));
    const coinData = await Promise.all( promises );
    const coinPriceData = coinData.map( function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        rank: coin.rank,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number( coin.quotes["USD"].price ).toFixed(4)) 
      };
    });

    setCoinData(coinPriceData);
  }


  useEffect(function() {
    if(coinData.length === 0) {
      componentDidMount(); 
    }
  });


  const handleBalanceVisibility = () => {
    setShowBalance(oldValue => !oldValue);
  }


 const handleRefresh = async (valueChangekey) => {
  const keyData =  await axios.get( tickerUrl + valueChangekey);
   const newCoinData = coinData.map( function( values ) {
    let newValues = {...values};
    if (values.key === valueChangekey) {
      newValues.price = parseFloat(Number( keyData.data.quotes["USD"].price ).toFixed(4));
    };
  
  return newValues;
  });
  setCoinData(newCoinData); 
}

    return (
      <Div>
        <AppHeader />
        <AccountBalance 
          amount={balance}
          handleBalanceVisibility={handleBalanceVisibility} 
          showBalance={showBalance} />
        <CoinList 
          coinData={coinData}
          handleRefresh={handleRefresh}
          showBalance={showBalance} />
      </Div>
    );

}

export default App;

