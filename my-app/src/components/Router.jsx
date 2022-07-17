import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Account from "./Account";
import About from "./About";
import UserPreferences from "./UserPreferences";

export default function Router() {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/reset" element={<Reset />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/account" element={<Account />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/query" element={<UserPreferences/>}/>
            </Routes>
        </>
    );
}