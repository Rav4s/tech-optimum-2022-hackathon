import logo from './logo.svg';
import './App.css';
import { app, analytics, auth } from './firebase';
import {getDataByName, getCoordinates} from "./modules/countryData.js";

getCoordinates("peru").then((d) => {
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
