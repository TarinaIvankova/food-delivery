//import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem=({cartItem})=>{

//const dishes=dataDishes.find(item=> item.id===cartItem.dishId);
const dispatch=useDispatch();

    return(<div className="cartTwo">
    <div className="dishesname">
      <p>{cartItem.name}</p>
    </div>
    <div className="quantity">
      <p>{cartItem.quantity} шт</p>
    </div>
    <div className="price">
      <p> {cartItem.price * cartItem.quantity} руб.</p>
    </div>
    <div className="delete">
      <span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
      <img className="icon" src="https://img.icons8.com/ios-filled/512/delete-sign.png"/> 
      </span>
    </div>
    </div>)
}
export default CartItem