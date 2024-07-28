import React from "react";


const CartApp=({cartItem,setcartItem})=>{
  function inc(Men)
    {const exsit =cartItem.find((x)=>{
      return x.id===Men.id;
    })

    setcartItem(cartItem.map((item)=>{
    return item.id ===Men.id ?{...exsit,quantity:exsit.quantity+1}:item
    }))
    }

  function dec(Men){
      const exsit =cartItem.find((x)=>{
      return x.id===Men.id;
    })

    setcartItem(cartItem.map((item)=>{
    return item.id ===Men.id ?{...exsit,quantity:exsit.quantity-1}:item
    }))
    }
function removecart(Men){
    const exsit=cartItem.find((x)=>{
    return x.id===Men.id;
  })
if(exsit.quantity>0)
    {
      setcartItem(cartItem.filter((x)=>{
      return x.id!==Men.id
    }))
    }
    }

const TotalPrice=cartItem.reduce((cost,item)=>cost+item.quantity*item.cost,0);
const ClickHandler=()=>{
  alert(
    "Your Order is Placed Successfully"
  )
}

return(
       <>
       {
       cartItem.length===0 && 
       <div>
      <h1 className="cart-bottomtext">Cart is Empty please Select a Product</h1>
      <button className="cart-shop"><a href="http://localhost:3000/Home" >Shop Now</a></button>
      </div>
       }
       <div className="cart-items">
      {
      cartItem.map((item)=>{

return(
     
      <div className="cart">
      <img src={item.img} className="cart-cardimg"/>
      <div className="cart-details"  key={item.id}>
      <h1 className="cart-name" >{item.name}</h1>
      <p2><b>Rs.{item.cost}</b></p2>
      <p2 className="cart-linethrough">{item.Originalcost}</p2>
      <p2 style={{color:"orange"}}>{item.offer}</p2>
      <div className="quantity">
      <button className="quantity-dec" onClick={()=>dec(item)}>-</button>
      <input type="text" value={item.quantity} className="cartinput"></input>
      <button className="quantity-inc" onClick={()=>inc(item)}>+</button>
      </div>
      <h3 className="cartsubtotal">sub Total: Rs.{item.cost * item.quantity}</h3>
      </div>
      <button className="remove_cart"onClick={()=>removecart(item)}>X</button>
      </div>
     
    )})
    }
    </div>
    {
      cartItem.length >0 &&
      <div >
      <h1 className="cartprice">Total Amount: Rs.{TotalPrice}</h1>
      <button className="checkout" onClick={()=>{ClickHandler()}}><a href="http://localhost:3000/Home">CheckOut</a></button>
      </div>
    }
    </>
    )
    }

export default CartApp;