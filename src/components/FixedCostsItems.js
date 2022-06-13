export default function FixedCostsItems({item}){
    return(
        <div className="item-div">
            <h3 className="item-title">Item: {item.item}</h3>
            <h3 className="item-price">Price: ${item.price}</h3>
        </div>
    )
}