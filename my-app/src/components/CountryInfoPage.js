import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react"; 
import {getCapitalCity, getCoordinates, getCurrency, getLanguages, getRegion} from "../Modules/countryData";
import "../styles/CountryInfoPage.css";

function CountryInfoPage(){
    // let temp = [];
    const [region, setRegion] = useState("");
    const [capitalCity, setCapitalCity] = useState("");
    const [countryName, setCountryName] = useState("");
    const [languages, setLanguages] = useState([]);
    const [coordinates, setCoordinates] = useState("");
    // const [currencies, setCurrencies] = useState("");
    return (
        <div className="everything">
            <h1 className='header'>Get Info About a Country!</h1>
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
                <button className="search-button" onClick={() => {
                    // getCurrency("peru").then((d) => {
                    //     setCurrencies(d);
                    // });
                    // temp = currencies;
                    // temp.map(x => x.name);
                    
                    // console.log(currencies);
                    getLanguages(countryName).then((d) => {
                        setLanguages(d);
                    });
                    getCoordinates(countryName).then((d) => {
                        setCoordinates(d);
                    });
                    getCapitalCity(countryName).then((d) => {
                        setCapitalCity(d);
                    });
                    getRegion(countryName).then((d) => {
                        setRegion(d);
                    });
                }}>
                    Get Data
                </button>
            </div>
            <div className="info-display-area">
                <ul className="list">
                    {/* <li>Currencies in {countryName}: {temp.map(curr => (
                        <li key={curr}>{curr}</li>
                    ))}</li> */}
                    <li>The capital city of {countryName} is: {capitalCity}</li>
                    <li>{countryName} is located in the region of {region}</li>
                    <li>People in {countryName} speak {languages.map((lang) => (<span key={lang}>{lang}, </span>))}</li>
                    <li>{countryName} is located at latitude {coordinates[0]} and longitude {coordinates[1]}</li>
                </ul>
            </div>
        </div>
    )
}

export default CountryInfoPage
