
import { useAuthentication } from "../hooks/index";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from './../context/DataContext.js'
import PrivateRoute from "./PrivateRoute";
// Pages routes
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";

import {Login, Register, PasswordRecovery} from "../pages/auth/index.js"
import Loader from '../components/common/Loader.jsx';

const AppRouter = () => {

    // Hook to check if user is authenticated with aws cognito
    const {isAuthenticated, isAuthenticating} = useAuthentication();

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
                {/* Conditional to check if user is authenticated then returns to dashboard, otherwise redirect to login or register */}
                <Route path="/login" element={ isAuthenticated ? <Dashboard /> : <Login /> } />
                <Route path="/register" element={isAuthenticated ?  <Dashboard /> : <Register /> } />
                <Route path="/forgot-password" element={isAuthenticated ?  <Dashboard /> : <PasswordRecovery /> } />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </DataProvider>
    )
}

export default AppRouter;