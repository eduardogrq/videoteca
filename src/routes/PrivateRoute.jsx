
import { Navigate, Outlet } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const PrivateRoute = () => {

    const auth = {token: false}

    return(
        auth.token ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoute;
