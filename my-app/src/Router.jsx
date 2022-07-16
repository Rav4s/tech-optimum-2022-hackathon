import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Router() {

    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
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