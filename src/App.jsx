import React from 'react';
import Header from './components/Header.jsx';
import Data from './components/Data.jsx'
import {calculateInvestmentResults,formatter} from './util/investment.js';


function App() {
  return (

    <>
    
    <Header id="user-input" className="input-group"/>
    <Data id='result'/>
    
    </>
  )
}

export default App
