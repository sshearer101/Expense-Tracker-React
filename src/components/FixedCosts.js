import {useState} from 'react'
import FixedCostsItem from './FixedCostsItems'

export default function FixedCosts({fixedCostBudget}){

    const [fixedCosts, setFixedCosts] = useState([{item: "", price: ""}])
    const [fixedItems, setFixedItems] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        fixedCostBudget(fixedCosts)
        setFixedItems([...fixedItems, fixedCosts])
    }


    return(
        <div>
     <form onSubmit={handleSubmit}>
        <h2>Fixed Costs</h2>
        <div>
          <label>Item:</label>
          <input
            type="text"
            name="item"
            id="item"
            onChange={(e) => setFixedCosts({...fixedCosts, item: e.target.value})}
            value={fixedCosts.item}
          >
          </input>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e) => setFixedCosts({...fixedCosts, price: e.target.value})}
            value={fixedCosts.price}
          >
          </input>
        </div>
          <input
            type="submit"
          ></input>
      </form>
      <div>
        <h2>Fixed Income Items</h2>
        {/* <h3>{fixedCosts.item}</h3> */}
        {/* {fixedCosts.map((x) => {
            
        })} */}

      </div>
        </div>
    )
}