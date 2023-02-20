
import { Navigate, Outlet } from 'react-router-dom';
import {useAuthentication} from '../hooks/index'
import Loader from '../components/common/Loader';

const PrivateRoute = () => {
    // Hook to check if user is authenticated with aws cognito
    const { isAuthenticated, isAuthenticating } = useAuthentication();

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
