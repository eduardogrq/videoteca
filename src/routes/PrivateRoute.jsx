
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Login from '../components/Auth/Login';
import { Auth } from 'aws-amplify';
import Loader from '../components/common/Loader';

const PrivateRoute = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch (error) {
            console.log('Usuario no autenticado');
        } finally {
            setTimeout(() => {
                setIsAuthenticating(false);
            }, 500)
        }
    }

    if (isAuthenticating) {
        return (
            <Loader />
        )
    }

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute;
