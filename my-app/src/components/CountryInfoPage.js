import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function CountryInfoPage(){
    const [countryName, setCountryName] = useState("");
    return (
        <>
            <div className="input area">
            <input
                type="text"
                className="login__textBox"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Country Name"
            />
            </div>
        </>
    )
}

export default CountryInfoPage