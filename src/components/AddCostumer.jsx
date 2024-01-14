import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddCostumer = ({fancAdd}) => {

    const [name, setName] = useState("");
    const [pc, setPc] = useState("");
    const [occupation, setOccupation] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [bankNumber, setBankNumber] = useState("");
    const [branchNumber, setBranchNumber] = useState("");
    const [accountNumber, setAccountNumber] = useState("");

    const navigate = useNavigate();

    const submit = () => {
        const body = {
            name: name,
            pc: pc,
            occupation: occupation,
            email: email,
            mobile: mobile,
            bankNumber: bankNumber,
            branchNumber: branchNumber,
            accountNumber: accountNumber
        }
        fancAdd(`http://localhost:8000/add/costumers/${localStorage.getItem("userId")}`,body);
        navigate("/lobby")

    }
    return (
        <div>
            <h2>פרטי הלקוח</h2>
            <input
                type="text"
                placeholder="name of costumer"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="P.C"
                onChange={(e) => setPc(e.target.value)}
            />
            <input
                type="text"
                placeholder="occupation"
                onChange={(e) => setOccupation(e.target.value)}
            />
            <h2>פרטי התקשרות</h2>
            <input
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="mobile"
                onChange={(e) => setMobile(e.target.value)}
            />
            <h2>פרטי חשבון</h2>
            <input
                type="text"
                placeholder="מספר בנק"
                onChange={(e) => setBankNumber(e.target.value)}
            />
            <input
                type="text"
                placeholder="מספר סניף"
                onChange={(e) => setBranchNumber(e.target.value)}
            />
            <input
                type="text"
                placeholder="מספר חשבון"
                onChange={(e) => setAccountNumber(e.target.value)}
            />
            <br></br>
            <button onClick={submit}>Enter</button>
        </div>
    )
}
export default AddCostumer;