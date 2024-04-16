import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, Router } from 'react-router-dom'
import LoginMenu from "./pages/LoginPage";
import Home from './pages/IndexPage.jsx';
import Bookings from "./pages/BookingsPage.jsx";
import Rooms from "./pages/RoomsPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import Users from "./pages/UsersPage.jsx";
import PrivateRoute from "./app/PrivateRoute.js";

export default function LogIn() {
 
    const [auth, setAuth ] = useState(localStorage.getItem("AUTH_LS_KEY") || false);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginMenu setAuth={setAuth} />} />
                <Route path='/login' element={<LoginMenu setAuth={setAuth} />} />
                <Route path="/home" element={
                        <PrivateRoute auth={auth}>
                            <Home />
                        </PrivateRoute>
                } />
                <Route path="/bookings" element={
                    <PrivateRoute auth={auth}>
                        <Bookings />
                    </PrivateRoute>
                } />
                <Route path="/rooms" element={
                    <PrivateRoute auth={auth}>
                        <Rooms />
                    </PrivateRoute>
                } />
                <Route path="/contact" element={
                    <PrivateRoute auth={auth}>
                        <Contact />
                    </PrivateRoute>
                } />
                <Route path="/users" element={
                    <PrivateRoute auth={auth}>
                        <Users />
                    </PrivateRoute>
                } />
            </Routes>
    </BrowserRouter>
    )
}

