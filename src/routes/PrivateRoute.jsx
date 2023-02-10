
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PrivateRoute = () => {

    

    return (
        true ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute;
