import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removefromcart,updatecartcount } from "./Action";

 function Checkout({onClose}){

   const cartItems=useSelector((state)=>state.cart.cartItems);
   const dispatch=useDispatch();

const handleRemoveItem=(name)=>{
   dispatch(removefromcart(name));
   dispatch(updatecartcount());
}

    return(
 <>
 <button onClick={onClose}>X</button>
 {cartItems.map((item)=>
(
   
<div className="logoin">
   <h3>{item.name}</h3>
   <p>{item.cost}</p>
   <button onClick={()=>handleRemoveItem(item.name)}>Remove</button>
   </div>
))}
</>
    )
   
   };
    

    export default Checkout;