import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing component/Routing";


function App(){
    const [cartItem,setcartItem]=useState([]);
    const addtocart=(Men)=>{
    const exist =cartItem.find((x)=>{
    return x.id ===Men.id;
    
  })
  if(exist){
    alert("This product is already added")
  }
  else{
    setcartItem(([...cartItem,{...Men,quantity:1}]))
  }

  const addtocarts=(Women)=>{
    const exist =cartItem.find((x)=>{
    return x.id ===Women.id;
  })
  if(exist){
    alert("This product is already added")
  }
  else{
    setcartItem(([...cartItem,{...Women,quantity:1}]))
  }
  }
const addtocart=(Kids)=>{
  const exist =cartItem.find((x)=>{
    return x.id ===Kids.id;
        
  })
  if(exist){
  alert("This product is already added")
}
else{
  setcartItem(([...cartItem,{...Kids,quantity:1}]))
}
}
   console.log(setcartItem)
   }
   
return(

    <BrowserRouter>
    <Routing addtocart={addtocart}  cartItem={cartItem} setcartItem={setcartItem}/>
    </BrowserRouter>
    
)
}

export default App;