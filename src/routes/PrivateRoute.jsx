
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Login from '../components/Auth/Login';
import { Auth } from 'aws-amplify';

const PrivateRoute = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async() => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch (error) {
            console.log('Usuario no autenticado');
        } finally {
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <div>Cargando...</div>; // O cualquier otro indicador de carga
    }

    return (

        isAuthenticated ? <Outlet /> : <Navigate to="/login" />

    )

}

export default PrivateRoute;
