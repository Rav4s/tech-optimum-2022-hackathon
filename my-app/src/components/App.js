import '../styles/App.css';
import { getDataByName, getCoordinates, getCurrency, getLanguages, getCapitalCity, hasOceanAccess, getRegion, getFlagSVG } from "../Modules/countryData.js";
import Router from './Router';
import NavBar from './NavBar';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <>
      <div className="main">
        {user === null ?
          <>
            <Router>
            </Router>
          </>
          :
          <>
            <NavBar />
            <Router>
            </Router>
          </>}
      </div>
    </>
  );
}

export default App;
