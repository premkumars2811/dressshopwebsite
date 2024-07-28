import React from "react";
import Header from "../Components/Header/heading";
import Footer from "../Components/Footer/Footer";


const  b=[
        {id:"1",img:"./Images/l9.jpg",name:"Mandarin Neck Kurta",cost:991,Originalcost:"Rs.1599",offer:"(38% OFF)"},
        {id:"2",img:"./Images/l2.jpg",name:"Long Chiffon Dupatta",cost:4299,Originalcost:"Rs.6199",offer:"(30% OFF)"},
        {id:"3",img:"./Images/l3.jpg",name:"Pink Jaal Cotton Yoke",cost:2799,Originalcost:"Rs.3149",offer:"(30% OFF)"},
        {id:"4",img:"./Images/l4.jpg",name:"Nello Straight Kurta",cost:989,Originalcost:"Rs.2199",offer:"(55% OFF)"},
        {id:"5",img:"./Images/l5.jpg",name:"Blue Raw Silk Saree",cost:865,Originalcost:"Rs.1566",offer:"(68% OFF)"},
        {id:"6",img:"./Images/l6.jpg",name:"Green Gurhal Dress",cost:429,Originalcost:"Rs.1227",offer:"(65% OFF)"},
        {id:"7",img:"./Images/l7.jpg",name:"Bandhani Red Saree",cost:399,Originalcost:"Rs.1999",offer:"(80% OFF)"},
        {id:"8",img:"./Images/l8.jpg",name:"Blue Design Suit Set",cost:459,Originalcost:"Rs.1499",offer:"(69% OFF)"}
         ]

function Women({addtocart}){
    
    return(
            <>
            <Header/>
            <div className="contenttitle" smooth={true} duration={500}>
            <h1>WOMEN CLOTHING</h1>
            <div className="content">
            {b.map((item)=>(
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

export default Women;

    