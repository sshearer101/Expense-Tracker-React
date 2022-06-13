import {useState} from 'react'
import AdditionalCostsItems from './AdditionalCostsItems'

export default function AdditionalCosts({costBudget, allAdditionalItems}){

    const [additionalCosts, setAdditionalCosts] = useState([{item: "", price: "", importance: ""}])
    const [additionalItems, setAdditionalItems] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        costBudget(additionalCosts)
        setAdditionalItems([...additionalItems, additionalCosts])
        allAdditionalItems([...additionalItems, additionalCosts])

    }

    return(
        <div>
     <form onSubmit={handleSubmit} className='additional-costs-form'>
        <h2 className='title'>Additional Costs</h2>
        <div>
          <label>Item:</label>
          <input
            type="text"
            name="item"
            id="item"
            onChange={(e) => setAdditionalCosts({...additionalCosts, item: e.target.value})}
            value={additionalCosts.item}
          >
          </input>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e) => setAdditionalCosts({...additionalCosts, price: e.target.value})}
            value={additionalCosts.price}
          >
          </input>
        </div>
        <div>
          <label>Importance:</label>
          <input
            type="range"
            name="importance"
            id="importance"
            min="0"
            max="10"
            onChange={(e) => setAdditionalCosts({...additionalCosts, importance: e.target.value})}
            value={additionalCosts.importance}
          >
          </input>
        </div>
          <input
            type="submit"
          ></input>
      </form>
      {/* <div className="item-container"> */}
        {/* <h2>Additional Income Items</h2> */}
        {/* <h3>{fixedCosts.item}</h3> */}
        {/* <div>
        {additionalItems.map(item => 
            <AdditionalCostsItems 
                key={item.id}
                item={item}
            />
        )}
        </div> */}
      {/* </div> */}
        </div>
    )
}