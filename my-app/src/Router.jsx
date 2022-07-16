import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";


export default function Router() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}>
                    {/*   <Route index element={<Home />} />
  <Route path="teams" element={<Teams />}>
    <Route path=":teamId" element={<Team />} />
    <Route path="new" element={<NewTeamForm />} />
    <Route index element={<LeagueStandings />} />
</Route> */}
                </Route>
            </Routes>
        </>
    );
}