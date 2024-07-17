/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const AdminRoutes = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, isLoading } = useAuth();

    const location = useLocation();
    // console.log(location.pathname);

    if (user && isAdmin) {
        return children
    }

    if (isLoading || isAdminLoading) {
        return <LoadingAnimation />
    }

    return <Navigate to={'/'} state={{ from: location }} replace />
};

export default AdminRoutes;