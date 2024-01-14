import { useState ,useEffect} from "react";
import { Link, useNavigate, useOutletContext} from "react-router-dom";

function Revenue(gg) {
    const [userData, setUserData] = useState([]);
     const data = useOutletContext();
  
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
            <h1>הכנסות</h1>
            <img src={{}} onClick={() => navigate("/add/revenue")} />
        
           
            
        </div>

    )
}
export default Revenue;