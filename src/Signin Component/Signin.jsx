import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../reactfirebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Imageslider from "../Components/Imageslider/Imageslider";
function Signin(){
    const navigate=useNavigate();
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handleRegister=(e)=>{
    e.preventDefault(e);

signInWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
    console.log(userCredential);
    console.log("Login successfully");
    alert("Login Successfully")
    navigate("/Home");
  
}).catch((error)=>{
    console.log(error);
})
}
    
return(
        <>
        <Imageslider/>
        <div className="signincontainer">
            <h1>Login</h1>
        <form>
            <p>Email</p>
            <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setemail(e.target.value)}/> 
            <p>Password</p>
            <input type="password" placeholder="Enter your Password"value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <p>Don't have an account?<a href="http://localhost:3000/" className="clickbutton"> Click Here</a></p>
            <button type="submit" onClick={handleRegister} >Log in</button>
        </form>
        </div>
        </>
    )
    }
export default Signin;