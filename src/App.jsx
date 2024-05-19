import {useState} from 'react';
import Header from './components/Header.jsx';
import Data from './components/Data.jsx'

function App() {

  const [userInput,setUserInput] =useState({ initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn:6,
    duration: 10,});


  const inputIsValid=userInput.duration >=1;
    
    function handleChange (inputIdentifier,newValue){

      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue //this + sign will change the numbers from string to inyegers
          };
      });

  }

  return (

    <>

    {
  <Header userInput={userInput} onChange={handleChange}/>
  }

{ !inputIsValid && <p className='center'> Please enter a duration greater than zero.</p>}

  { inputIsValid && <Data value={userInput} />}
    </>
  )
}

export default App
