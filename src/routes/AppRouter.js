
import { Routes, Route } from "react-router-dom";
import { DataProvider } from './../context/DataContext.js'
import AuthRoutes from "./AuthRoutes";
import PrivateRoute from "./PrivateRoute";
// Pages routes
import Home from "../pages/Home/Home";
import Dashboard from "../pages/AdminPanel/Dashboard/Dashboard";

import { Login, Register, PasswordRecovery } from "../pages/auth/index.js"

const AppRouter = () => {

    return (
        <DataProvider>
            <Routes>
                {/* Public routes */}
                <Route element={<Home />} path="/" exact />
                {/* Routes to redirect to dashboard if is authenticated, otherwise reder its child */}
                <Route element={<AuthRoutes />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<PasswordRecovery />} />
                </Route>
                {/* Routes that render its child if is authenticated, otherwise navigate to login */}
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </DataProvider>
    )
}

export default AppRouter;