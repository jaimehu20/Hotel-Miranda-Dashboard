import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginMenu from "./pages/LoginPage";
import Home from './pages/IndexPage.jsx';
import Bookings from "./pages/BookingsPage.jsx";
import Users from "./pages/UsersPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import Rooms from "./pages/RoomsPage.jsx";
import { RoomDetails } from "./pages/RoomDetails.jsx";
import PrivateRoute from "./app/PrivateRoute.js";
import { AuthProvider } from "./Context/AuthProvider.jsx";

function LogIn() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<LoginMenu />} />
                    <Route path="/home" element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                    } />
                    <Route path="/bookings" element={
                        <PrivateRoute>
                            <Bookings />
                        </PrivateRoute>
                    } />
                    <Route path="/rooms" element={
                        <PrivateRoute>
                            <Rooms />
                        </PrivateRoute>
                    } />
                    <Route path="/rooms/:id" element={
                        <PrivateRoute>
                            <RoomDetails />
                        </PrivateRoute>
                    } />
                    <Route path="/contact" element={
                        <PrivateRoute>
                            <Contact />
                        </PrivateRoute>
                    } />
                    <Route path="/users" element={
                        <PrivateRoute>
                            <Users />
                        </PrivateRoute>
                    } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default LogIn;
                