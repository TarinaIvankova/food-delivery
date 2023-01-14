const ChangeQuantity =({quantity, setQuantity})=> {

const addQuantity=()=>{
    const newQuantity=quantity+1;
    setQuantity(newQuantity)
}
 const removeQuantity=()=>{
    if (quantity<=1) return;
    const  newQuantity=quantity-1;
    setQuantity(newQuantity)
 }



    return (
        <div className="btn">


            <button className="plus" onClick={addQuantity}>+</button>
            <p>{quantity}</p>
            <button className="minus" onClick={removeQuantity}>-</button>
        </div>
    )
}
export default ChangeQuantity;