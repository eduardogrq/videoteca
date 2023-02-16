
import { Routes, Route } from "react-router-dom";
import {DataProvider} from './../context/DataContext.js'
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register"

const AppRouter = () => {

    return (
        <DataProvider>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </DataProvider>
    )
}

export default AppRouter;