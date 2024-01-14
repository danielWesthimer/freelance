import React from "react";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";


const Enter = () => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  async function checkUser() {
    let body = { name: username, password: password }
    const res = await fetch('http://localhost:8000/login', {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json;charset=utf-8" },
      Cache: 'default'
    })
    const data = await res.json()
    console.log(data);
    if (data.status == true) {
      localStorage.setItem("userId", data.id);
      localStorage.setItem("username", username);
      navigate("/")
    }
    else {
      setmessage("the conection fail, try again")
    }
  }
  return (
    <div>
      <button style={{ position: "absolute", right: "0px", top: "10px" }} onClick={() => navigate("/register")}>Register</button>
      <button style={{ position: "absolute", right: "0px", top: "40px" }} onClick={() => navigate("/register")}>Management</button>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={checkUser}>Enter</button>
      <h1>{message}</h1>
    </div>
  )
};

export default Enter;