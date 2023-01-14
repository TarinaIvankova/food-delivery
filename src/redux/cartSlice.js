import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers: {
addItemToCart: (state, action)=>{
    //const timeId=new Date(). getTime()
    state.cartItems.push({
        ...action.payload.dish,
        //id: timeId,
        //dishId: action.payload.dish.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity* action.payload.dish.price
    })
},
removeItemFromCart: (state, action)=>{
    state.cartItems=state.cartItems.filter(
        cartItem=>cartItem.id !==action.payload.cartItemId
    )
},
updateQuantity: (state, action)=>{
    const newCart=[]
    state.cartItems.forEach(item=>{
        if (item.id===action.payload.dish.id){
            let countNew=item.quantity+action.payload.quantity
            let totalSum=item.price*countNew
            const changeCart={...item, quantity:countNew,
            totalPrice:totalSum}
            newCart.push(changeCart)
        }
        else {
            newCart.push(item);
        }
    })
    state.cartItems=newCart
}

    }
})
export const getTotalPrice=state=>{
    return state.cart.cartItems.reduce((total, cartItems)=>{
        return cartItems.totalPrice+total
    }, 0)
}
export const getCartItems= state=> state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;