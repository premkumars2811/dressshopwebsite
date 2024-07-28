import React, { useEffect, useState } from "react";
import Header from "../Components/Header/heading";
import Footer from "../Components/Footer/Footer";

const  c=[
        {id:"1",img:"./Images/gk1.jpg",name:"Lehenga Choli",cost:991,Originalcost:"Rs.1599",offer:"(38% OFF)"},
        {id:"2",img:"./Images/gk5.jpg",name:"Pink Chick",cost:4299,Originalcost:"Rs.6199",offer:"(30% OFF)"},
        {id:"3",img:"./Images/gk3.jpg",name:"Neck Net Flare Frock",cost:599,Originalcost:"Rs.2499",offer:"(76% OFF)"},
        {id:"4",img:"./Images/gk4.jpg",name:"Cold Shoulder Frock",cost:749,Originalcost:"Rs.2999",offer:"(75% OFF)"},
        {id:"5",img:"./Images/bk1.jpg",name:"Kurta Dhoti with Jacket",cost:1750,Originalcost:"Rs.3499",offer:"(50% OFF)"},
        {id:"6",img:"./Images/bk2.jpg",name:"Yellow Cotton Dhoti",cost:1055,Originalcost:"Rs.1999",offer:"(51% OFF)"},
        {id:"7",img:"./Images/bk3.jpg",name:"Solid Color Suit Set",cost:1449,Originalcost:"Rs.1700",offer:"(15% OFF)"},
        {id:"7",img:"./Images/bk4.jpg",name:"Silk Kurta Pyjama Set",cost:1059,Originalcost:"Rs.2249",offer:"(53% OFF)"}
        ]


function Kids({addtocart}){

    return(
        <>
        <Header/>
        <div className="contenttitle" smooth={true} duration={500}>
        <h1>KIDS COLLECTION</h1>
        <div className="content">
        {c.map((item)=>(
        <div className="container">
        <img src={item.img} className="cardimg"/>
        <div className="pagedetails">
        <h1 className="name" >{item.name}</h1>
        <p2><b>Rs.{item.cost}</b></p2>
        <p2 className="linethrough">{item.Originalcost}</p2>
        <p2 style={{color:"orange"}}>{item.offer}</p2>
        <div className="cardbutton">
        <button type="button" onClick={()=>addtocart(item)}>ADD TO CART</button>
   
        </div>
        </div>
        </div>

 ))}
        </div>
        </div>
        <Footer/>
         </>
    
)};


export default Kids;

