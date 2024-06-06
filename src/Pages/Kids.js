import React, { useEffect, useState } from "react";
import Header from "../heading";


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {  addtocart } from "../Action";

const  c=[{img:"./Images/gk1.jpg",name:"Lehenga Choli",cost:"Rs.991",Originalcost:"Rs.1599",offer:"(38% OFF)"},
{img:"./Images/gk5.jpg",name:"Pink Chick",cost:"Rs.4299",Originalcost:"Rs.6199",offer:"(30% OFF)"},
{img:"./Images/gk3.jpg",name:"Neck Net Flare Frock",cost:"Rs.599",Originalcost:"Rs.2499",offer:"(76% OFF)"},
{img:"./Images/gk4.jpg",name:"Cold Shoulder Frock",cost:"Rs.749",Originalcost:"Rs.2999",offer:"(75% OFF)"},
{img:"./Images/bk1.jpg",name:"Kurta Dhoti with Jacket",cost:"Rs.1750",Originalcost:"Rs.3499",offer:"(50% OFF)"},
{img:"./Images/bk2.jpg",name:"Yellow Cotton Dhoti",cost:"Rs.1055",Originalcost:"Rs.1999",offer:"(51% OFF)"},
{img:"./Images/bk3.jpg",name:"Solid Color Suit Set",cost:"Rs.1449",Originalcost:"Rs.1700",offer:"(15% OFF)"},
{img:"./Images/bk4.jpg",name:"Silk Kurta Pyjama Set",cost:"Rs.1059",Originalcost:"Rs.2249",offer:"(53% OFF)"},]
function Kids(props){
    
 
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
    <p2><b>{item.cost}</b></p2>
    <p2 className="linethrough">{item.Originalcost}</p2>
    <p2 style={{color:"orange"}}>{item.offer}</p2>
    <div className="cardbutton">
    <button type="button" onClick={props.addtocart}>ADD TO CART</button>
   
            </div>
            </div>
        </div>
 ))}

            </div>
    
    </div>
            </>
    
    
    )};

    const mapStateTopProps=(state)=>{
        return{
            cart:state.cart
        }
      }
      const maDispatchToProps=(dispatch)=>{
        return bindActionCreators({
         addtocart   
      },dispatch)}
    
    
      export default connect(mapStateTopProps,maDispatchToProps)(Kids);
