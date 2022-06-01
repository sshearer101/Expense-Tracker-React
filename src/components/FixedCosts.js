import {useState} from 'react'

export default function FixedCosts(){

    const [fixedCosts, setFixedCosts] = useState({item: "", price: ""})

    function handleSubmit(e){
        e.preventDefault()
    }

    //create form for fixed costs
  // form includes item, price

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
        </div>
    )
}