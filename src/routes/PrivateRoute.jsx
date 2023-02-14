
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import Loader from '../components/common/Loader';

const PrivateRoute = () => {

    // Variables to check if user is authenticated and check if the promise was resolved
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    useEffect(() => {
        checkAuthStatus();
    }, []);

    // Function to resolve auth promise, checking if is ready, will set isAuthenticating variable to false
    // Then render Outlet component
    const checkAuthStatus = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch (error) {
            console.log('Usuario no autenticado:', error);
        } finally {
            setIsAuthenticating(false);
        }
    }

    // Conditional to check if promise is not ready yet, this to render Loader component
    if (isAuthenticating) {
        return (
            <Loader />
        )
    }

    // If isAuthenticating false, then the promise was resolved and we render child component
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute;
