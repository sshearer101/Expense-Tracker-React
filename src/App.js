import './App.css';
import {useState} from 'react'
import Budget from './components/Budget'

function App() {

  const [budget, setBudget] = useState()

  function newBudget(e){
    console.log('new budget')
    setBudget(e)
  }


  return (
    <div className="App">

      <div>
        <Budget 
        newBudget={newBudget}
        />
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


//create form for fixed costs
  // form includes item, price


//create form for additional expenses
  // form item, price, type, importance 



