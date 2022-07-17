import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react"; 

function CountryInfoPage(){
    let currencies, languages, coordinates = [];
    let capitalCity, region = "";

    const [countryName, setCountryName] = useState("");
    return (
        <>
            <div className="input-area">
                <input
                    type="text"
                    className="country-name-text-box"
                    value={countryName}
                    onChange={(e) => setCountryName(e.target.value)}
                    placeholder="Country Name"
                />
            </div>
            <div className="search-button-container">
                <button className="search-button" onClick={() => {}}>
                    Get Data
                </button>
            </div>"
        </>
    )
}

export default CountryInfoPage