import {useState} from "react"

export default function Budget({newBudget}){

    const [details, setDetails] = useState()

    function handleSubmit(e){
        e.preventDefault()
        newBudget(details)
    }
 
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <h2>Budget</h2>
        <div>
          <input
            placeholder='set your budget here'
            onChange={(e) => setDetails(e.target.value)}
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