import './App.css'
import { useState } from 'react'
import Budget from './components/Budget'
import FixedCosts from './components/FixedCosts'
import AdditionalCosts from './components/AdditionalCosts'
import FixedCostsItems from './components/FixedCostsItems'
import AdditionalCostsItems from './components/AdditionalCostsItems'

function App() {
  const [budget, setBudget] = useState(0)
  const [savings, setSavings] = useState(0)

  const [fixedItemList, setFixedItemList] = useState([])
  const [additionalItemList, setAdditionalItemList] = useState([])

  function newBudget(e) {
    console.log('new budget')
    setBudget(e)
    setSavings(e / 10)
  }

  function costBudget(e) {
    setBudget(budget - e.price)
  }

  function allFixedItems(e) {
    setFixedItemList(e)
    console.log(e)
  }

  function allAdditionalItems(e) {
    setAdditionalItemList(e)
    console.log(e)
  }

  return (
    <div className="App">
      <div className="intro">
        <h2 className="intro-header">Budget Builder</h2>
        <p className="intro-text">
          Insert your information in each relevant field in order to track your
          monthly finances.
        </p>
      </div>
      <div className="input-divs">
        <div className="budget-div">
          <Budget newBudget={newBudget} />
        </div>

        <div className="fixed-cost-div">
          <FixedCosts costBudget={costBudget} allFixedItems={allFixedItems} />
        </div>

        <div className="additional-cost-div">
          <AdditionalCosts
            costBudget={costBudget}
            allAdditionalItems={allAdditionalItems}
          />
        </div>
      </div>
      <div className="item-container">
          <div className="fixed-item-container">
            <h2>Fixed Items</h2>
            {fixedItemList.map((item) => (
              <FixedCostsItems key={item.id} item={item} />
            ))}
          </div>
          <div className="additional-item-container">
            <h2>Additional Items</h2>
            {additionalItemList.map((item) => (
              <AdditionalCostsItems key={item.id} item={item} />
            ))}
          </div>
        </div>
      <div className="monthly-budget">
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
  )
}

export default App

//input for establishing budget

//create form for additional expenses
// form item, price, type, importance
