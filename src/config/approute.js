import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../screens/forms/signup";

import Dashboard from "../screens/dashboard";
import Login from "../screens/forms/login";

function AppRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="/*" element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter >
        </>
    )
}

export default AppRoute;