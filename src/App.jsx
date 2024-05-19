import {React,useState} from 'react';
//import Header from './components/Header.jsx';
import Data from './components/Data.jsx'

let  initialInvestment= 1000;
let annualInvestment= 5000;
let expectedReturn=500000;
let duration= 10;
/*
console.log(calculateInvestmentResults(data));*/



function App() {

  const [initialValue,setValue]=useState({  initialInvestment: 1000,
    annualInvestment: 5000,
    expectedReturn:500000,
    duration: 10,});

    function calculateInvestment(e)
    {
      const {name,value}=e.target;
      setValue({...initialValue,[name]:value});
      //console.log(target);
      //console.log(value);
      //console.log(text);
      console.log(initialValue);

    }

  return (

    <>

    {/*
  <Header id="user-input" className="input-group" onChange={calculateInvestment} value={initialValue}/>
  */}

  <header id="user-input" >
  <div >


<label htmlFor="initial investment">INITIAL INVESTMENT</label>

<input type="number" className="input-group"  name="initialInvestment" value={initialValue.initialInvestment} required onChange={calculateInvestment}/>

<label htmlFor="annual investment">ANNUAL INVESTMENT</label>

<input type="number" className="input-group" name="annualInvestment" value={initialValue.annualInvestment} required onChange={calculateInvestment}/>

<label htmlFor="expected return">EXPECTED RETURN</label>

<input type="number" className="input-group" name="expectedReturn" value={initialValue.expectedReturn} required onChange={calculateInvestment}/>

<label htmlFor="duration">DURATION</label>

<input type="number" className="input-group" name="duration" value={initialValue.duration} required onChange={calculateInvestment}/>
</div>
  </header>
    
  <Data id='result' value={initialValue} />
    </>
  )
}

export default App
