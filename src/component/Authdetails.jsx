import { useEffect, useState } from "react";
import auth from "../reactfirebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
const Authdetails =()=>{
    const [authuser,setauthuser]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
        const listen= onAuthStateChanged(auth,(user)=>{
if (user){
    setauthuser(user)
}
else{
    setauthuser(null);
}
        })

        return ()=>{
            listen();
        }
    },[]);
    const usersignout=()=>{
        signOut(auth).then(()=>{
            console.log('sign out successfully');
           navigate('/Signin')
        }).catch(error=>console.log(error))
    }
    return(
<div>
    
<button className="authbutton" onClick={usersignout}><MdOutlineLogout/>Logout</button> </div>
    )
}
export default Authdetails;