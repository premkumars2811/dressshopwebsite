import React from "react";
import{Routes,Route} from 'react-router-dom';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Registerscreen from "./Screens/Registerscreen";
import Signin from "./component/Signin";
import Home from "./Home";
import Checkout from "./Checkout";

const Routing=(cartitems)=>{
    const login=window.localStorage.getItem("isLoggedin",true)
    return(
        
        <Routes>
            <Route path="/" Component={Registerscreen}></Route>
            <Route path="/Signin" Component={Signin}></Route>
            <Route path="/Men" Component={ Men }></Route>
            <Route path="/Women" Component={ Women }></Route>
            <Route path="/Kids"Component={Kids}></Route>
            <Route path="/Home" Component={Home}></Route>
            <Route path="/Checkout" Component={Checkout}></Route>
        </Routes>
       
    )
}
export default Routing;