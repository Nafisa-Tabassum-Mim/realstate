import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext)
    const location = useLocation()
    console.log('location = ', location.pathname, location)

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'>  </Navigate>
    );
};

export default PrivateRoute;