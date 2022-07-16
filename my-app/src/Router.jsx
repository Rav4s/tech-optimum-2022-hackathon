import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";

export default function Router() {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/reset" element={<Reset />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
}