import {useState} from 'react'
import AdditionalCostsItems from './AdditionalCostsItems'

export default function AdditionalCosts({costBudget}){

    const [additionalCosts, setAdditionalCosts] = useState([{item: "", price: ""}])
    const [additionalItems, setAdditionalItems] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        costBudget(additionalCosts)
        setAdditionalItems([...additionalItems, additionalCosts])
    }

    return(
        <div>
     <form onSubmit={handleSubmit} className='fixed-costs-form'>
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
          <input
            type="submit"
          ></input>
      </form>
      <div>
        <h2>Fixed Income Items</h2>
        {/* <h3>{fixedCosts.item}</h3> */}
        <div>
        {additionalItems.map(item => 
            <AdditionalCostsItems 
                key={item.id}
                item={item}
            />
        )}
        </div>
      </div>
        </div>
    )
}