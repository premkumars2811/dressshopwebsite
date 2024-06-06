const initialState={
    cartItems:[],
    cart:0
}
const CounterReducer=(state=initialState,action)=>{
    switch (action.type){
        case "ADDTOCART":
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload],
                cart :state.cart+1
            };
            case "REMOVEFROMCART":
            return{
                ...state,
                cartItems :state.cartItems.filter(item=>item.name                           !==action.payload),
                cart:state.cart-1,
            };
            case "UPDATECART":
            return{
                ...state,
                cart :state.cartItems.length,
            };

            default:
            return state;
    }
}
export default CounterReducer;