import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, useLinkClickHandler } from "react-router-dom";
import { RiSearchLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Button } from "@mui/material";

import {  addtocart } from "./Action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Authdetails from "./component/Authdetails";


 const img='./images/m.jpg';
 const pic='./images/cart-icon.svg';

function Header(props){
  const[open,SetOpen]=useState(false);
  const[show ,setshow]=useState(false);
 const clickHandler =(data)=>{
  data.map((item)=>{
  console.log(item.name)
 })
}


  return(
    
    <>
    <div className="header">
      <img src={img} alt="img" className="symbolimg"></img>
      <div className="gender">
      <NavLink to ="/Home" smooth={true} duration={500} className="link" ><h1>HOME</h1></NavLink>
       <NavLink to ="/Men" smooth={true} duration={500} className="link"><h1>MEN</h1></NavLink>
       <a href="https://www.ottostore.com/collections/t-shirts" class="hero__slide-link" tabindex="-1"></a>
       <NavLink to="/Women" smooth={true} duration={500} className="link"><h1>WOMEN</h1></NavLink>
       <NavLink to="/Kids" smooth={true} duration={500} className="link"><h1>KIDS</h1></NavLink>
       {show && <p>heading</p>}
        
       </div>
      <i class="fa fa-user" aria-hidden="true"></i>
      <div className="search-container">
        <input type="Search-icon" placeholder="Search your Products" />
      </div>
       <div className="symbol">
        <h1 onClick={()=>SetOpen(!open)}><AccountCircleIcon /></h1>
        <h1 style={{marginLeft:"20px"}}><ShoppingCartIcon/></h1>
        <NavLink to="/Checkout"><h2></h2></NavLink>  
        {
         open &&(<div className="auth">
           <h1><Authdetails/></h1>
           
           </div>)}
           <h1>{props.cart}</h1>
    </div>
    </div>``
    
  
    </>
);
};


const mapStateTopProps=(state)=>{
  return{
      cart:state.cart
  }
}
const maDispatchToProps=(dispatch)=>{
  return bindActionCreators({
      
},dispatch)}

export default connect(mapStateTopProps,maDispatchToProps)(Header);