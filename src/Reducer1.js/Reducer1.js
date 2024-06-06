
import { createStore } from "redux";
const initialState = {
    cart : []
}
 
 
 
const reducer = (state = initialState,action) =>{
 
    switch(action.type){
        case "ADD_TO_DATA" :
            return {
                ...state,
                cart : [...state.cart ,action.payload]
 
            };
            case "REMOVE_FROM_CART" :
                return {
                    ...state,
                    cart :state.cart.filter(item=>item.id!==action.payload.id),
     
                };

 default :
            return state;
    }
 
};
const store=createStore(reducer);
export default store;
 