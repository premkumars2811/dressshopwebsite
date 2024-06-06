import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../reactfirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Registerscreen(){
    const navigate=useNavigate();
const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handleRegister=(e)=>{
e.preventDefault();
createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
    console.log(userCredential);
    console.log("Registered successfully");
    alert("Registered successfully");
    navigate("/Signin");

}).catch((error)=>{
    console.log(error);
});
};
    
        return(
            <div className="Registercontainer">
            
    <h1>Registeration Form</h1>
    <form>
    <p>Email Id</p>
    <input type="email" className="" placeholder="Enter your Email" value={email} onChange={(e)=>setemail(e.target.value)}/> 
    <p>Password</p>
    <input type="password" placeholder="Enter your Password"value={password} onChange={(e)=>setpassword(e.target.value)}/>
          <button type="submit" onClick={handleRegister}>Register</button>
          <p>Already have an account? <a href="http://localhost:3000/Signin">Login</a> here </p>
            </form>
            </div>
    )
}
export default Registerscreen;