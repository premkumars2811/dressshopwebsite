import React from "react";
import Header from "../heading";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {  addtocart } from "../Action";

const  a=[{img:"./Images/dq1.jpg",name:"Sky Blue Casual Shirt",cost:"Rs.991",Originalcost:"Rs.1599",offer:"(38% OFF)"},
{img:"./Images/dqs2.jpg",name:"0TT0-Gray Casual Shirt",cost:"Rs.749",Originalcost:"Rs.1299",offer:"(55% OFF)"},
{img:"./Images/dqs3.jpg",name:"Olive Plain Collar T Shirt",cost:"Rs.863",Originalcost:"Rs.2399",offer:"(64% OFF)"},
{img:"./Images/dqs4.jpg",name:"Grey Printed Collar T Shirt",cost:"Rs.989",Originalcost:"Rs.2199",offer:"(55% OFF)"},
{img:"./Images/dqs6.jpg",name:"Blue Checked Casual Shirt",cost:"Rs.939",Originalcost:"Rs.1999",offer:"(53% OFF)"},
{img:"./Images/ms5.jpg",name:"Multi Color Casual Shirt",cost:"Rs.899",Originalcost:"Rs.1999",offer:"(55% OFF)"},
{img:"./Images/ms4.jpg",name:"Maroon Checked Shirt",cost:"Rs.529",Originalcost:"Rs.999",offer:"(47% OFF)"},
{img:"./Images/ms3.jpg",name:"Multi Shade Polo T Shirt",cost:"Rs.645",Originalcost:"Rs.1093",offer:"(66% OFF)"},
]


function Men(props){
        return(
                <>
                           <Header/>
                           <div className="contenttitle" smooth={true} duration={500}>

                           <h1> MEN CLOTHING</h1>
 <div className="content">
 {a.map((item)=>(

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
        )
}
const mapStateTopProps=(state)=>{
        return{
            cart:state.cart
        }
      }
      const maDispatchToProps=(dispatch)=>{
        return bindActionCreators({
         addtocart   
      },dispatch)}
    
    
      export default connect(mapStateTopProps,maDispatchToProps)(Men);