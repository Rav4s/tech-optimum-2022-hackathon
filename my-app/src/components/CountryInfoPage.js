import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function CountryInfoPage(){
    return (
        <>
            <div className="input area">
            <input
                type="text"
                className="login__textBox"
                //value={email}
                //onChange={(e) => setEmail(e.target.value)}
                placeholder="Country Name"
            />
            </div>
        </>
    )
}

export default CountryInfoPage