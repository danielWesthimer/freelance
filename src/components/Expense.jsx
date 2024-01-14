import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Expense() {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    // let username = localStorage.getItem("username")
    //      useEffect(
    //       () => {GetUser()}
    //       , []);

    //   async function GetUser() {
    //       const res = await fetch(`http://localhost:8000/user/${localStorage.getItem("username")}`)
    //       const data = await res.json()
    //       console.log(data);
    //       setUserData(data);
    //   }

    return (
        <div>
            <h1>הוצאות</h1>

            <img src={{}} onClick={() => navigate("/add/expense")} />
        </div>

    )
}
export default Expense;