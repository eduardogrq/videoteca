
import { Routes, Route } from "react-router-dom";
import Home from "./../components/Home/Home";
import Dashboard from "./../components/Dashboard/Dashboard";
import Login from "./../components/Auth/Login";
import Register from "./../components/Auth/Register";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRouter;