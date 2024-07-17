/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const PrivateRoute = ({children}) => {

    const {user, isLoading} = useAuth();

    const location = useLocation();
    // console.log(location.pathname);

    if(user){
        return children
    }

    if(isLoading){
        return <LoadingAnimation/>
    }

    return <Navigate to={'/login'} state={{from: location}} replace/>
};

export default PrivateRoute;