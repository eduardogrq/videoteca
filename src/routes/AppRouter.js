
import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {DataProvider} from './../context/DataContext.js'
import Home from "./../components/Home/Home";
import Dashboard from "./../components/Dashboard/Dashboard";
import Login from "./../components/Auth/Login";
import Register from "./../components/Auth/Register";
import PrivateRoute from "./PrivateRoute";


const AppRouter = () => {

    return (
        <DataProvider>

            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </DataProvider>
    )
}

export default AppRouter;