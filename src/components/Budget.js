import {useState} from "react"

export default function Budget({newBudget}){

    const [finance, setFinance] = useState()

    function handleSubmit(e){
        e.preventDefault()
        newBudget(finance)
    }
 
    return(
        <div>
        <form onSubmit={handleSubmit} className='budget-form'>
        <h2 className="title">Budget</h2>
        <div>
        <label>Set your budget:</label>
          <input
            onChange={(e) => setFinance(e.target.value)}
          >
          </input>
          <input
            type="submit"
            // onClick={(e) => newBudget(e)}
          ></input>
        </div>
      </form>

        </div>
    )
}