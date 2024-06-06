import React from "react";
const img1="./Images/dq5.jpg";
const img3="./Images/banner1.jpg";
const img4="./Images/dq4.jpg";
const img2="./Images/banner6.jpg";


function Imageslider(){
    return(
        <div className="imageslider">
            <div className="slider">
       <img src={img1}/>
       <img src={img3}/>
       <img src={img4}/>
       <img src={img2}/>
    
       </div>
        </div>
        
    )
}
export default Imageslider;