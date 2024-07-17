import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlinePreview, MdEmail } from "react-icons/md";
import { TbBrandBooking} from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdShoppingBag } from "react-icons/md";
import useCarts from "../../Hooks/useCarts";
import useAdmin from "../../Hooks/useAdmin";
import { MdPayments } from "react-icons/md";

const SidebarList = () => {

    const [carts] = useCarts();

    //TODO: get admin value from the database;
    const [isAdmin] = useAdmin();

    return (
        <div>
            <ul className="menu p-4">
                {
                    isAdmin ? <>
                        <li className="text-lg font-normal">
                            <NavLink to={'/dashboard/adminHome'}><FaHome /> Admin Home</NavLink>
                        </li>
                        <li className="text-lg font-normal">
                            <NavLink to={'/dashboard/addItems'}>< FaUtensils /> Add Items</NavLink>
                        </li>
                        <li className="text-lg font-normal">
                            <NavLink to={'/dashboard/manageItems'}><FaList /> Manage Items</NavLink>
                        </li>
                        <li className="text-lg font-normal">
                            <NavLink to={'/dashboard/mangeBookings'}><FaBook />Manage Bookings</NavLink>
                        </li>
                        <li className="text-lg font-normal">
                            <NavLink to={'/dashboard/allUsers'}><FaUsers /> All Users</NavLink>
                        </li>
                    </> :
                        <>
                            <li className="text-lg font-normal">
                                <NavLink to={'/dashboard/userHome'}><FaHome /> User Home</NavLink>
                            </li>
                            <li className="text-lg font-normal">
                                <NavLink to={'/dashboard/paymentHistory'}><MdPayments /> Payment History</NavLink>
                            </li>
                            <li className="text-lg font-normal">
                                <NavLink to={'/dashboard/cart'}><FaShoppingCart /> My Cart ({carts?.length})</NavLink>
                            </li>
                            <li className="text-lg font-normal">
                                <NavLink to={'/dashboard/review'}><MdOutlinePreview />Add A Review</NavLink>
                            </li>
                            <li className="text-lg font-normal">
                                <NavLink to={'/dashboard/bookings'}><TbBrandBooking /> My Bookings</NavLink>
                            </li>
                        </>
                }
                <div className="divider"></div>
                {/* shared links in dashboard */}
                <li className="text-lg font-normal">
                    <NavLink to={'/'}><FaHome />Home</NavLink>
                </li>
                <li className="text-lg font-normal">
                    <NavLink to={'/order/soup'}><FiMenu />Menu</NavLink>
                </li>
                <li className="text-lg font-normal">
                    <NavLink to={'/'}><MdShoppingBag />Shop</NavLink>
                </li>
                <li className="text-lg font-normal">
                    <NavLink to={'/dashboard/contact'}><MdEmail />Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SidebarList;