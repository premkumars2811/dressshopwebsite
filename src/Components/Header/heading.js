import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, useLinkClickHandler } from "react-router-dom";
import Authdetails from "../../Signin Component/Authdetails";
import { FiMenu, FiX } from "react-icons/fi";
 
const img='./images/m.jpg';
const pic='./images/cart-icon.svg';


function Header(props){
   const[open,SetOpen]=useState(false);
   const[show ,setshow]=useState(false);
   const [data,setdata]=useState(false);
   const handleclick =()=>setdata(!data);
   const closemenu=()=>setdata(false);
const clickHandler =(data)=>{
   data.map((item)=>{
  console.log(item.name)
   })
   }

return(
       <>
       <div className="header">
       <img src={img} alt="img" className="symbolimg"></img>
   
       <div onClick={handleclick} className="navicons">
            {open? <FiX/>:<FiMenu/>}
   </div>
   <div className={data ? "gender active":"gender"}>
       <NavLink to ="/Home" smooth={true} duration={500} className="link"><h1>HOME</h1></NavLink>
       <NavLink to ="/Men" smooth={true} duration={500} className="link"><h1>MEN</h1></NavLink>
       <a href="https://www.ottostore.com/collections/t-shirts" class="hero__slide-link" tabindex="-1"></a>
       <NavLink to="/Women" smooth={true} duration={500} className="link"><h1>WOMEN</h1></NavLink>
       <NavLink to="/Kids" smooth={true} duration={500} className="link"><h1>KIDS</h1></NavLink>
       {show && <p>heading</p>}
       
      <i class="fa fa-user" aria-hidden="true"></i>
      <div className="search-container">
      <input type="Search-icon" className="input-search-container" placeholder="Search your Products" />
      </div>
      <div className="symbol">
      <div className="accountCircleIcon">
      <h1 onClick={()=>SetOpen(!open)}><AccountCircleIcon /></h1>
      </div>
      <div className="shopingcart-icon">
      <h1 style={{marginLeft:"20px"}}><NavLink to="/CartApp"><ShoppingCartIcon/></NavLink></h1>
      </div>
      </div>
        
        
      {
        open &&(<div className="auth">
        <h1><Authdetails/></h1>
        </div>)}
           
       </div>
       </div>
      
       </> 
       );
       };

export default Header;
