import React, { useState } from "react";

const obj=[{id:1,img:"./Images/Tshirt1.jpg",name:"Roadster",cost:359,Originalcost:"Rs.599",offer:"(40% OFF)"},
{id:2,img:"./Images/Tshirt2.jpg",name:"Kook N Keech",cost:516,Originalcost:"Rs.1099",offer:"(53% OFF)"},
{id:3,img:"./Images/Tshirt2.jpg",name:"Kook N Keech",cost:516,Originalcost:"Rs.1099",offer:"(53% OFF)"},
{id:4,img:"./Images/T shirt3.jpg",name:"Louis Philippe Sport",cost:991,Originalcost:"Rs.1599",offer:"(38% OFF)"},
{id:5,img:"./Images/Tshirt4,jpg.jpg",name:"INVICTUS",cost:603,Originalcost:"Rs.1098",offer:"(45% OFF)"},
{id:6,img:"./Images/tshirt5.jpg",name:"BULLMER",cost:389,Originalcost:"Rs.1499",offer:"(24% OFF)"},
{id:7,img:"./Images/dqs3.jpg",name:"Olive Plain Collar T Shirt",cost:863,Originalcost:"Rs.2399",offer:"(64% OFF)"},
{id:8,img:"./Images/Tshirt6.jpg",name:"Stormborn",cost:549,Originalcost:"Rs.999",offer:"(45% OFF)"},
{id:9,img:"./Images/shirt7.jpg",name:"Checked Slim Fit Shirt ",cost:749,Originalcost:"Rs.1299",offer:"(55% OFF)"},
{id:10,img:"./Images/shirt8.jpg",name:"Men Navy Slim  Casual Shirt",cost:799,Originalcost:"Rs.1999",offer:"(60% OFF)"},
{id:11,img:"./Images/gk4.jpg",name:"Cold Shoulder Frock",cost:749,Originalcost:"Rs.2999",offer:"(75% OFF)"},
{id:12,img:"./Images/dqs4.jpg",name:"Grey Printed Collar T Shirt",cost:989,Originalcost:"Rs.2199",offer:"(55% OFF)"},
{id:13,img:"./Images/shirt11.jpg",name:"Solid Cotton Casual Shirt",cost:863,Originalcost:"Rs.2399",offer:"(64% OFF)"},
{id:14,img:"./Images/gk5.jpg",name:"Pink Chick",cost:4299,Originalcost:"Rs.6199",offer:"(30% OFF)"},
{id:15,img:"./Images/l9.jpg",name:"Mandarin Neck Kurta",cost:991,Originalcost:"Rs.1599",offer:"(38% OFF)"},
{id:16,img:"./Images/l5.jpg",name:"Blue Raw Silk Saree",cost:865,Originalcost:"Rs.1566",offer:"(68% OFF)"},
{id:17,img:"./Images/bk2.jpg",name:"Yellow Cotton Dhoti",cost:1055,Originalcost:"Rs.1999",offer:"(51% OFF)"},
{id:18,img:"./Images/sweat5.jpg",name:"Boys Red Printed Sweatshirt",cost:939,Originalcost:"Rs.1999",offer:"(53% OFF)"},
{id:19,img:"./Images/bk4.jpg",name:"Silk Kurta Pyjama Set",cost:1059,Originalcost:"Rs.2249",offer:"(53% OFF)"},
{id:20,img:"./Images/add.jpg",name:"White Printed Sweatshirt",cost:517,Originalcost:"Rs.1399",offer:"(63% OFF)"},
{id:21,img:"./Images/l4.jpg",name:"Nello Straight Kurta",cost:989,Originalcost:"Rs.2199",offer:"(55% OFF)"},];

let navigate=["Shirts","Sarees","Kids Wear","Home & Living","Beauty","Clothing","Dresses","Terms of Service","Refund policy"]

const Content=({addtocart})=>{
    
    
return(

    <div className="content" smooth={true} duration={500}>
    {obj.map((item)=>(
    <div className="container">
    <img src={item.img} className="cardimg"/>
    <div className="details" key={item.id}>
    <h1 className="name" >{item.name}</h1>
    <p2><b>Rs.{item.cost}</b></p2>
    <p2 className="linethrough">{item.Originalcost}</p2>
    <p2 style={{color:"orange"}}>{item.offer}</p2>
    <div className="contentbutton">
    <button type="button" smooth={true} duration={500} onClick={()=>addtocart(item)}>ADD TO CART</button>
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

export default Content;

