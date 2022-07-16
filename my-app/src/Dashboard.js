import React, { useState } from "react"
import AuthContext from "../contexts/AuthContext"
import { app, analytics, auth } from './firebase';
import { withRouter } from "react-router";
import Router from './Router'

function Dashboard(props) {

  const [user, setUser] = useState(false);
  const [busy, setBusy] = useState(true);

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      setUser(true);
    } else {
      // User is signed out
      // ...
      setUser(false);
    }
    setBusy(false);
  });

  const logout = () => {
    firebase.auth().signOut().then(() => {
      props.history.push({
        pathname: "/"
      });
      window.location.reload();
    });
  }

  return (
    <>

      {user === false ?
        <>
          <div className="background">
            <Loading></Loading>
            <HeroTitleDescription></HeroTitleDescription>
            <AuthContext></AuthContext>
          </div>
        </>
        :
        <>
          <MainNavbar logout={logout}></MainNavbar>
          <div className="overlay-container">
            <SurveyNotif></SurveyNotif>
            <Router />
          </div>
        </>}

    </>
  )
}

export default withRouter(Dashboard);