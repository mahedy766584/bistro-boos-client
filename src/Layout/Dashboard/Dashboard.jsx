import { Outlet } from "react-router-dom";
import SidebarList from "./SidebarList";

const Dashboard = () => {


    return (
        <div className="flex">

            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <SidebarList/>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;