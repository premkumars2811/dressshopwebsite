import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {  addtocart } from "./Action";

const obj=[{id:1,img:"./Images/Tshirt1.jpg",name:"Roadster",cost:"Rs.359",Originalcost:"Rs.599",offer:"(40% OFF)"},
{img:"./Images/Tshirt2.jpg",name:"Kook N Keech",cost:"Rs.516",Originalcost:"Rs.1099",offer:"(53% OFF)"},
{img:"./Images/T shirt3.jpg",name:"Louis Philippe Sport",cost:"Rs.991",Originalcost:"Rs.1599",offer:"(38% OFF)"},
{img:"./Images/Tshirt4,jpg.jpg",name:"INVICTUS",cost:"Rs.603",Originalcost:"Rs.1098",offer:"(45% OFF)"},
{img:"./Images/tshirt5.jpg",name:"BULLMER",cost:"Rs.389",Originalcost:"Rs.1499",offer:"(24% OFF)"},
{img:"./Images/dqs3.jpg",name:"Olive Plain Collar T Shirt",cost:"Rs.863",Originalcost:"Rs.2399",offer:"(64% OFF)"},
{img:"./Images/Tshirt6.jpg",name:"Stormborn",cost:"Rs.549",Originalcost:"Rs.999",offer:"(45% OFF)"},
{img:"./Images/shirt7.jpg",name:"Checked Slim Fit Shirt ",cost:"Rs.749",Originalcost:"Rs.1299",offer:"(55% OFF)"},
{img:"./Images/shirt8.jpg",name:"Men Navy Slim  Casual Shirt",cost:"Rs.799",Originalcost:"Rs.1999",offer:"(60% OFF)"},
{img:"./Images/gk4.jpg",name:"Cold Shoulder Frock",cost:"Rs.749",Originalcost:"Rs.2999",offer:"(75% OFF)"},
{img:"./Images/dqs4.jpg",name:"Grey Printed Collar T Shirt",cost:"Rs.989",Originalcost:"Rs.2199",offer:"(55% OFF)"},
{img:"./Images/shirt11.jpg",name:"Solid Cotton Casual Shirt",cost:"Rs.863",Originalcost:"Rs.2399",offer:"(64% OFF)"},
{img:"./Images/gk5.jpg",name:"Pink Chick",cost:"Rs.4299",Originalcost:"Rs.6199",offer:"(30% OFF)"},
{img:"./Images/l9.jpg",name:"Mandarin Neck Kurta",cost:"Rs.991",Originalcost:"Rs.1599",offer:"(38% OFF)"},
{img:"./Images/l5.jpg",name:"Blue Raw Silk Saree",cost:"Rs.865",Originalcost:"Rs.1566",offer:"(68% OFF)"},
{img:"./Images/bk2.jpg",name:"Yellow Cotton Dhoti",cost:"Rs.1055",Originalcost:"Rs.1999",offer:"(51% OFF)"},
{img:"./Images/sweat5.jpg",name:"Boys Red Printed Sweatshirt",cost:"Rs.939",Originalcost:"Rs.1999",offer:"(53% OFF)"},
{img:"./Images/bk4.jpg",name:"Silk Kurta Pyjama Set",cost:"Rs.1059",Originalcost:"Rs.2249",offer:"(53% OFF)"},
{img:"./Images/add.jpg",name:"White Printed Sweatshirt",cost:"Rs.517",Originalcost:"Rs.1399",offer:"(63% OFF)"},
{img:"./Images/l4.jpg",name:"Nello Straight Kurta",cost:"Rs.989",Originalcost:"Rs.2199",offer:"(55% OFF)"},];
let navigate=["Shirts","Sarees","Kids Wear","Home & Living","Beauty","Clothing","Dresses","Terms of Service","Refund policy"]

const Content=(props)=>{
    
    
    return(
            
 <div className="content" smooth={true} duration={500}>
    {obj.map((item)=>(
    <div className="container">
        <img src={item.img} className="cardimg"/>
        <div className="details">
    <h1 className="name" >{item.name}</h1>
    <p2><b>{item.cost}</b></p2>
    <p2 className="linethrough">{item.Originalcost}</p2>
    <p2 style={{color:"orange"}}>{item.offer}</p2>
    <div className="contentbutton">
    <button type="button" smooth={true} duration={500} onClick={props.addtocart}>ADD TO CART</button>
    </div>
    </div>
    </div>
    
    
)

    
    
)}
    
<div className="abovefooter">
    
<h3>You might be interested in:</h3>

<div className="abovefooterlist">
       {navigate.map((item)=>( 
       
<ol>
    <li style={{listStyle:"none"}}>{item}  |</li>
    </ol>
   
       ))}

       </div>
</div>
       </div>
            

    
)}
const mapStateTopProps=(state)=>{
    return{
        cart:state.cart
    }
  }
  const maDispatchToProps=(dispatch)=>{
    return bindActionCreators({
     addtocart   
  },dispatch)}


  export default connect(mapStateTopProps,maDispatchToProps)(Content);

