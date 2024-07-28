import React from "react";
const Cart = ({ cart, incrementQuantity, decrementQuantity, totalAmount }) =>{
   return (
           <div>
          <h2>Cart</h2>
          {cart.length === 0 ? (
          <p>Cart is empty</p>
           ) : (
           cart.map((item) => (
           <>
            <div className=".container">
            <img src={item.img} className="cardimg"/>
            <div className=".pagedetails">
            <div key={item.id}>
            <h1 className="name" >{item.name}</h1>
            <p2><b>Rs.{item.cost}</b></p2>
            <p2 className="linethrough">{item.Originalcost}</p2>
            <p2 style={{color:"orange"}}>{item.offer}</p2>
            <div className="cardbutton">
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            <button onClick={() => decrementQuantity(item.id)}>-</button>
            </div>
            </div>
            </div>
            </div>
          </>

        ))
        )}
            <h3>Total Amount: Rs.{totalAmount}</h3>
            </div>
        );
        };
  
export default Cart;  