
import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Main() {
    const [userData, setUserData] = useState([]);
    const [userId, setUsername] = useState(localStorage.getItem("userId") || false);
    const navigate = useNavigate();
    const x = 5;
    // async function GetUser() {
    //     const res = await fetch(`http://localhost:8000/user/${localStorage.getItem("userId")}`)
    //     const data = await res.json()
    //     console.log(data);
    //     setUserData(data);
    // }


    function chackIfConect() {
        if (!userId) {
            navigate("/enter")
        }
        else {
            navigate("/lobby")
        }
    }

    useEffect(
        () => {
            chackIfConect();
        },
        []);


    function logout() {
        localStorage.clear("userId");
        navigate("/enter");
    }

    return (
        <div>
            <div style={{ backgroundColor: "grey", height: "50px" }}>
                <Link to={"/lobby"}>Lobby</Link>
                <Link to={"/revenue"}>Revenue</Link>
                <Link style={{ backgroundColor: "blue", height: "220px" }} to={"/expense"}>Expense</Link>
                <button onClick={logout}>Logout</button>
                <h3>
                    <button style={{ borderRadius: "180px", position: "absolute", right: "10px", top: "10px" }}
                    /*      onClick={{}} */>{localStorage.getItem("username") /* && username.charAt(0) */}
                    </button>
                </h3>
            </div>

            <Outlet context={{ userData/* , GetUser */ }} />
        </div>
    );
}
export default Main;