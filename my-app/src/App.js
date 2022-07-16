import logo from './logo.svg';
import './App.css';

import { app, analytics, auth } from './firebase';
import {getDataByName, getCoordinates, getCurrency, getLanguages, getCapitalCity, hasOceanAccess, getRegion, getFlagSVG} from "./Modules/countryData.js";
import Dashboard from './Dashboard';
import Router from './Router';

function App() {
  return (
    <>
    <div className="main">

      <Router>
      </Router>
    </div>
    </>
  );
}

export default App;
