import React from "react";
import { useState, useEffect } from 'react';
import { useParams,useNavigate} from "react-router-dom";


const Register = () => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  async function userRegister() {
    if(username===""||password===""){
        setmessage("The feild is empty")
        return
    }
    console.log("llll");
    let body = { name: username, password: password }
    
    const res = await fetch('http://localhost:8000/register', {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json;charset=utf-8" },
      Cache: 'default'
    })
     const data = await res.text()
     console.log( data);
    //  if (data === "true") {
     
     navigate("/enter")
    //  }
    //  else if(data=="false"){
    //   setmessage("the register fail")
    //  }
    
  }
  return (
    <div>
       <button style={{position:"absolute",right:"0px",top:"10px"}} onClick={()=>navigate("/enter")}>Enter</button>
      <input
        type="text" 
        placeholder="name"
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={userRegister}>Register</button>
      <h1>{message}</h1>
    </div>
  )
};


export default Register;