
import { Auth } from 'aws-amplify';
import { Routes, Route } from "react-router-dom";
import { DataProvider } from './../context/DataContext.js'
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register"
import { useEffect, useState } from 'react';
import Loader from '../components/common/Loader.jsx';

const AppRouter = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    useEffect(() => {
        checkAuthStatus();
    })

    const checkAuthStatus = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch (error) {
            console.log('Usuario no autenticado:', error);
        } finally{
            setIsAuthenticating(false)
        }
    }

    // Conditional to check if promise is not ready yet, this to render Loader component
    if (isAuthenticating) {
        return (
            <Loader />
        )
    }

    return (
        <DataProvider>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route path="/login" element={ isAuthenticated ? <Dashboard /> : <Login /> } />
                <Route path="/register" element={isAuthenticated ?  <Dashboard /> : <Register /> } />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </DataProvider>
    )
}

export default AppRouter;