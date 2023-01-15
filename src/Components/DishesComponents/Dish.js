import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartItems, updateQuantity } from "../../redux/cartSlice";

const Dish =({dish})=>{
    const [quantity, setQuantity]=useState(1);
const dispatch=useDispatch()

const cartItems=useSelector(getCartItems)
const dishInCart=cartItems.some(item=>item.id===dish.id)
const handleClick=()=>{
    dishInCart
    ? dispatch(updateQuantity({dish, quantity}))
    : dispatch(addItemToCart({dish, quantity}))
}

    return (
<div className="component">
    
    <img src={`${dish.img}.jpeg`} alt="kartinki"/>
    <div className="mainComponent">
        <div className="name1">
    <h2>{dish.name} </h2>
    </div>
    <div className="price1">
    <p> {dish.price} руб.</p>
    </div>
    </div>
    <div className="add">
    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
    <button className="addToCart" onClick={handleClick}>В корзину</button>
    </div>
</div>
    )
}
export default Dish;