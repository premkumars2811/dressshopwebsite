import React from "react";
import{Routes,Route} from 'react-router-dom';
import Men from '../Pages/Men';
import Women from '../Pages/Women';
import Kids from '../Pages/Kids';
import Registerscreen from "../Screen/Registerscreen";
import Signin from "../Signin Component/Signin";
import Home from "../Home";
import CartApp from "../CartItem Components/CartApp";



const Routing=({cartItem,addtocart,addtocarts,setcartItem})=>{
    
    const login=window.localStorage.getItem("isLoggedin",true)
    return(
         
         <Routes>
            <Route path="/" Component={Registerscreen}></Route>
            <Route path="/Signin" Component={Signin}></Route>
            <Route path="/Men" element={<Men addtocart={addtocart}/>}></Route>
            <Route path="/Women" element={<Women addtocart={addtocart}/>}></Route>
            <Route path="/Kids"element={<Kids addtocart={addtocart}/>}></Route>
            <Route path="/Home" element={<Home addtocart={addtocart}/>}></Route>
            <Route path="/CartApp"element={<CartApp addtocart={addtocart} addtocarts={addtocarts} cartItem={cartItem} setcartItem={setcartItem}/>}></Route>
         </Routes>
       
)
}

export default Routing;