import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, Router } from 'react-router-dom'
import MyComp from "./pages/LoginPage";
import Home from './pages/IndexPage.jsx';

export default function Tron() {
    const [auth, setAuth ] = useState(localStorage);
    useEffect(() => {
        if (auth) {
            localStorage.setItem("AUTH_LS_KEY", "1");
        } else {
            localStorage.removeItem("AUTH_LS_KEY");
        }
    }, [auth]);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' component={<MyComp setAuth={setAuth} />} element={<MyComp />} />
                <Route path="/home" auth={
                    <PrivateRoute auth={auth}>
                        <Home />
                    </PrivateRoute>
                } element={<Home />} />
            </Routes>
    </BrowserRouter>
    )
}

function PrivateRoute({auth, children}) {
    if (!auth) {
        Navigate('');
        return children;
    } 
}

