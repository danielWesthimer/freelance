import React from "react";
import { useState, useEffect } from 'react';
import { useParams, useNavigate,Outlet } from "react-router-dom";
import AddCostumer from "./AddCostumer";
    
const Added = () => {

    const { type } = useParams()

    async function addDataToDb(url,body) {
        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-type": "application/json;charset=utf-8" },
          Cache: 'default'
        })}


    return (<div>
        <h1>add {type}</h1>
        {type == "costumer" && <AddCostumer fancAdd={addDataToDb} />}
        {/* {type == "revenue" && <AddCostumer fancAdd={addDataToDb} />} */}
        {/* <Outlet  /> */}
    </div>
    
    )
}
export default Added;