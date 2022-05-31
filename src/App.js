import './App.css';
import {useState} from 'react'

function App() {

  const [details, setDetails] = useState()
  const [budget, setBudget] = useState()

  function newBudget(e){
    e.preventDefault()
    console.log('new budget')
    setBudget(details)
  }


  return (
    <div className="App">
      <form >
        <h2>Budget</h2>
        <div>
          <input
            placeholder='set your budget here'
            onChange={(e) => setDetails(e.target.value)}
          >
          </input>
          <input
            type="submit"
            onClick={(e) => newBudget(e)}
          ></input>
        </div>
      </form>
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



