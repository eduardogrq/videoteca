
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Login from '../components/Auth/Login';

const PrivateRoute = ({children}) => {

    const {userData} = useContext(DataContext)
    console.log("🚀 ~ file: PrivateRoute.jsx:9 ~ PrivateRoute ~ userData", userData)

    return userData ? <Outlet /> : <Navigate to="/"/>
        // userData !== null ? <Outlet /> : <Navigate to="/login" />

    
}

export default PrivateRoute;
