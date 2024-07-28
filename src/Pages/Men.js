import React from "react";
import Header from "../Components/Header/heading";
import Footer from "../Components/Footer/Footer";


const  a=[
        {id:"1",img:"./Images/dq1.jpg",name:"Sky Blue Casual Shirt",cost:991,Originalcost:"Rs.1599",offer:"(38% OFF)"},
        {id:"2",img:"./Images/dqs2.jpg",name:"0TT0-Gray Casual Shirt",cost:749,Originalcost:"Rs.1299",offer:"(55% OFF)"},
        {id:"3",img:"./Images/dqs3.jpg",name:"Olive Plain Collar T Shirt",cost:863,Originalcost:"Rs.2399",offer:"(64% OFF)"},
        {id:"4",img:"./Images/dqs4.jpg",name:"Grey Printed Collar T Shirt",cost:989,Originalcost:"Rs.2199",offer:"(55% OFF)"},
        {id:"5",img:"./Images/dqs6.jpg",name:"Blue Checked Casual Shirt",cost:939,Originalcost:"Rs.1999",offer:"(53% OFF)"},
        {id:"6",img:"./Images/ms5.jpg",name:"Multi Color Casual Shirt",cost:899,Originalcost:"Rs.1999",offer:"(55% OFF)"},
        {id:"7",img:"./Images/ms4.jpg",name:"Maroon Checked Shirt",cost:529,Originalcost:"Rs.999",offer:"(47% OFF)"},
        {id:"8",img:"./Images/ms3.jpg",name:"Multi Shade Polo T Shirt",cost:645,Originalcost:"Rs.1093",offer:"(66% OFF)"}
         ]


const Men=({addtocart})=>{

  return(
        <>
        <Header/>
        <div className="contenttitle" smooth={true} duration={500}>  
        <h1> MEN CLOTHING</h1>
        <div className="content">
        {a.map((item)=>(
        <div className="container"  key={item.id}>
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
                    
)
}

export default Men;