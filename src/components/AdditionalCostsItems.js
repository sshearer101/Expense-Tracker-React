import react from 'react'

export default function AdditionalCostsItems({item}){
    return(
        <div className="item-div">
            <h3 className="item-title">{item.item}</h3>
            <h3 className="item-price">{item.price}</h3>
        </div>
    )
}