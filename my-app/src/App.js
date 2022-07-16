import logo from './logo.svg';
import './App.css';
import { app, analytics, auth } from './firebase';
import {getDataByName, getCoordinates, getCurrency, getLanguages, getCapitalCity, hasOceanAccess, getRegion, getFlagSVG} from "./modules/countryData.js";

getFlagSVG("peru").then((d) => {
  console.log(d);
});

function App() {
  return (
    <>
    <div className="main">
      
    </div>
    </>
  );
}

export default App;
