import {useState} from 'react'
import { v4 as uuid } from 'uuid';


export default function FixedCosts({costBudget, allFixedItems}){
  let unique_id = uuid()

    const [fixedCosts, setFixedCosts] = useState({item: "", price: ""})
    // const [fixedItems, setFixedItems] = useState([])


    function handleSubmit(e){
        e.preventDefault()
        costBudget(fixedCosts)
        fixedCosts.id = unique_id
        // setFixedItems([...fixedItems, fixedCosts])
        // allFixedItems([...fixedItems, fixedCosts])
        allFixedItems(fixedCosts)
        e.target.reset()
    }

    return(
        <div>
     <form onSubmit={handleSubmit} className='fixed-costs-form'>
        <h2 className='title'>Fixed Costs</h2>
        <div>
          <label>Item:</label>
          <input
            type="text"
            name="item"
            id="item"
            onChange={(e) => setFixedCosts({...fixedCosts, [e.target.name]: e.target.value})}
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
            onChange={(e) => setFixedCosts({...fixedCosts, [e.target.name]: e.target.value})}
            value={fixedCosts.price}
          >
          </input>
        </div>
          <input
            type="submit"
          ></input>
      </form>
      {/* <div className='item-container'> */}
        {/* <h2>Fixed Income Items</h2> */}
        {/* <h3>{fixedCosts.item}</h3> */}
        {/* <div>
        {fixedItems.map(item => 
            <FixedCostsItems 
                key={item.id}
                item={item}
            />
        )}
        </div> */}
      {/* </div> */}
        </div>
    )
}