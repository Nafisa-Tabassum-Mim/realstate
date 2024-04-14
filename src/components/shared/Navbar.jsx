import { Link, NavLink } from "react-router-dom";
import '../../App.css';
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li className="font-medium text-lg"><NavLink to="/" >Home</NavLink></li>
        <li className="font-medium  text-lg"><NavLink to="/books">Your Resorts</NavLink></li>
        <li className="font-medium text-lg"><NavLink to="/readingpages">Update Profile</NavLink></li>
        <li className="font-medium text-lg" ><NavLink to="/readingpages">User Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 drop-btn">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost lg:text-2xl">Island <span className="text-[#FFA500]"> Resorts </span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleLogout} className="btn bg-[#FFA500] text-white mr-2">Logout</button>
                        :
                        <Link to='/login' className="btn bg-[#FFA500] text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;