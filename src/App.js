import './App.css';
import {useState} from 'react'
import Budget from './components/Budget'
import FixedCosts from './components/FixedCosts';
import AdditionalCosts from './components/AdditionalCosts';

function App() {

  const [budget, setBudget] = useState(0)
  const [savings, setSavings] = useState(0)

  function newBudget(e){
    console.log('new budget')
    setBudget(e)
    setSavings(e/10)
  }

  function costBudget(e){
    setBudget(budget - e.price)
    console.log(e)
  }


  
  return (
    <div className="App">
      <div className="intro">
        Insert your information in each relevant field in order to track your monthly finances.
      </div>
      <div className='input-divs'>
      <div className="budget-div">
        <Budget newBudget={newBudget}/>
      </div>

      <div className="fixed-cost-div">
        <FixedCosts costBudget={costBudget}/>
      </div>
 
      <div className="additional-cost-div">
        <AdditionalCosts costBudget={costBudget}/>
      </div>
      </div>
      <div className='monthly-budget'>
        <h2>Your Monthly Budget</h2>
        <h3>${budget}</h3>
        <h2>Your Recommended Monthly Savings</h2>
        <h3>${savings}</h3>
      </div>

      {/* <div className='savings'>
        <h2>Your Recommended Monthly Savings</h2>
        <h3>${savings}</h3>
      </div>
    */}

    </div>
  );
}

export default App;



//input for establishing budget




//create form for additional expenses
  // form item, price, type, importance 



