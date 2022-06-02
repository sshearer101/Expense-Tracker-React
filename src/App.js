import './App.css';
import {useState} from 'react'
import Budget from './components/Budget'
import FixedCosts from './components/FixedCosts';

function App() {

  const [budget, setBudget] = useState(0)

  function newBudget(e){
    console.log('new budget')
    setBudget(e)
  }

  function fixedCostBudget(e){
    setBudget(budget - e.price)
  }
  return (
    <div className="App">

      <div>
        <Budget newBudget={newBudget}/>
      </div>

      <div>
        <FixedCosts fixedCostBudget={fixedCostBudget}/>
      </div>
 
      <div>
        <h2>Your Monthly Budget</h2>
        <h3>${budget}</h3>
      </div>
   

    </div>
  );
}

export default App;



//input for establishing budget




//create form for additional expenses
  // form item, price, type, importance 



