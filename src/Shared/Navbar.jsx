import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa"
import useCarts from "../Hooks/useCarts";
import useAdmin from "../Hooks/useAdmin";

const Navbar = () => {

    const { user, logOut } = useAuth();
    const [carts] = useCarts();
    const [isAdmin] = useAdmin();
    // console.log(carts);

    const navItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/soup'}>Order Food</Link></li>
        {
            user && isAdmin && <li><Link to={'/dashboard/adminHome'}>Secret</Link></li>
        }
        {
            user && !isAdmin && <li><Link to={'/dashboard/userHome'}>Secret</Link></li>
        }
        <li>
            <Link to={'/dashboard/cart'}>
                <button className="btn">
                    <FaShoppingCart className="mr-2"/>
                    <div className="badge badge-secondary">+{carts?.length}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={logOut} className="btn btn-primary" > Logout</button >
            </> : <>
                <li><Link to={'/login'}>Login</Link></li>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar fixed z-40 bg-black bg-opacity-40 text-white shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2 text-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="flex flex-col font-poppins text-3xl font-medium">Bistro Boss <span className="tracking-[6px] font-normal text-xl">Restaurant</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;