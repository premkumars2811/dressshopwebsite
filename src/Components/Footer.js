import React from "react";
let navigate=["New Arrivals","New Borns","Babies","Kids","Sale","Mommy & Me","Footwear","Accessories","Terms of Service","Refund policy"]
let boys=["T-Shirts","Shirts","Shorts","Jeans","Trousers","Clothing Sets ","Ethnic Wear","Track Pants & Pyjames","Jacket,Sweater & Sweatshirts","Party Wear","Innerwear & Thermals","Nightwear & Loungewear","Value Packs"]
let girls=["Tops & T-Shirts","Dungarees & Jumpsuits","Dresses","Jeans","Trousers","Clothing Sets ","Rompers","Jackets","Sweatshirts & Hoodies","Shorts & Skirts","Top & Bottom Sets"]
let help=["Shipping Policy","Return Policy","FAQS","Privacy Policy","Terms & Conditions","Manage Return & Exchange"]
function Footer(){
    
    return(
        
        <div className="footer">
        <div className="list">
        <h3 >NAVIGATE</h3>
       {navigate.map((item)=>(
        
<ul>
    <li style={{listStyle:"none"}}>{item}</li>
    </ul>
   
       ))}
       </div>
       
       <div className="list">
       <h3>BOYS</h3>
        {boys.map((item)=>(
 <ul>
     <li style={{listStyle:"none"}}>{item}</li>
     </ul>
     
        ))}
         </div>
         
       
       <div className="list">
       <h3>GIRLS</h3>
        {girls.map((item)=>(
 <ul>
     <li style={{listStyle:"none"}}>{item}</li>
     </ul>
     
        ))}
         </div>
          
       
          <div className="list">
          <h3 >NEEDHELP</h3>
           {help.map((item)=>(
    <ul>
        <li style={{listStyle:"none"}}>{item}</li>
        </ul>
        
           ))}
            </div>
</div>
        
    )}
export default Footer;