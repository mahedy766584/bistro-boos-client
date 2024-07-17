import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {

    const location = useLocation();
    // console.log(location);

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp') 
    // console.log(noHeaderFooter);

    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;