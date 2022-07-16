import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
function Dashboard() {
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
    <div className="dashboard">
      <div className="header">
        <h1>Welcome back, {name.split(' ')[0]}!</h1>
        <div className="fadingEffect"></div>
      </div>
      <div class="row">
        <div class="column">
          <h2 className="column-header">Column1</h2>
        </div>
        <div class="column">
          <h2 className="column-header">Column2</h2>
        </div>
        <div class="column">
          <h2 className="column-header">Column3</h2>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;