import react from 'react'

export default function AdditionalCostsItems({item}){
    return(
        <div className="item-div">
            <h3 className="item-title">Item: {item.item}</h3>
            <h3 className="item-price">Price: ${item.price}</h3>
            <h3 className="item-importance">Importance: {item.importance}/10</h3>
        </div>
    )
}