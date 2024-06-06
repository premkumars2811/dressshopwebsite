import React from "react";
import Header from "../heading";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {  addtocart } from "../Action";

const  b=[{img:"./Images/l9.jpg",name:"Mandarin Neck Kurta",cost:"Rs.991",Originalcost:"Rs.1599",offer:"(38% OFF)"},
{img:"./Images/l2.jpg",name:"Long Chiffon Dupatta",cost:"Rs.4299",Originalcost:"Rs.6199",offer:"(30% OFF)"},
{img:"./Images/l3.jpg",name:"Pink Jaal Cotton Yoke",cost:"Rs.2799",Originalcost:"Rs.3149",offer:"(30% OFF)"},
{img:"./Images/l4.jpg",name:"Nello Straight Kurta",cost:"Rs.989",Originalcost:"Rs.2199",offer:"(55% OFF)"},
{img:"./Images/l5.jpg",name:"Blue Raw Silk Saree",cost:"Rs.865",Originalcost:"Rs.1566",offer:"(68% OFF)"},
{img:"./Images/l6.jpg",name:"Green Gurhal Dress",cost:"Rs.429",Originalcost:"Rs.1227",offer:"(65% OFF)"},
{img:"./Images/l7.jpg",name:"Bandhani Red Saree",cost:"Rs.399",Originalcost:"Rs.1999",offer:"(80% OFF)"},
{img:"./Images/l8.jpg",name:"Blue Design Suit Set",cost:"Rs.459",Originalcost:"Rs.1499",offer:"(69% OFF)"},]

function Women(props){
    
    
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
    
    
      export default connect(mapStateTopProps,maDispatchToProps)(Women);