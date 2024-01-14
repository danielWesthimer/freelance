import { useState, useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import addImg from "./images/images1.png";

function Lobby() {

    const [userData, setUserData] = useState([]);
    const navigate = useNavigate()
    const data = useOutletContext();

    async function GetUser() {
            const res = await fetch(`http://localhost:8000/user/${localStorage.getItem("userId")}`)
            const data = await res.json()
            console.log(data);
            setUserData(data);
         }

    useEffect(() => {
    //    console.log("sababa") 
          GetUser()
    },[])

    return (
        <div>
            {userData.map((costumer, idx) => {
                return <h2 key={idx}>
                    {costumer.costumer_name} 
                </h2>
            })}

        
      {/* <img src={{addImg}}  onClick={()=>navigate("/add/costumer")}/> */}
      <i className="fa-solid fa-plus" style={{color:"red", fontSize:"50px"}} onClick={()=>navigate("/add/costumer")}></i>
        </div>

    )
}
export default Lobby;