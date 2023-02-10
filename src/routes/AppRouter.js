
import { Routes, Route } from "react-router-dom";
import Home from "./../components/Home/Home";
import Dashboard from "./../components/Dashboard/Dashboard";
import Login from "./../components/Auth/Login";
import Register from "./../components/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const AppRouter = () => {

    return (
        <Routes>
            <Route element={<Home />} path="/" exact/>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;