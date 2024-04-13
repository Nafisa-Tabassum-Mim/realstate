import { Link, NavLink } from "react-router-dom";
import '../../App.css';

const Navbar = () => {
    const links = <>
        <li className="font-medium text-lg hover:bg-black"><NavLink to="/" >Home</NavLink></li>
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Island <span className="text-[#FFA500]"> Resorts </span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#FFA500] text-white mr-2">Logout</a>
                <a className="btn bg-[#FFA500] text-white">Login</a>
            </div>
        </div>
    );
};

export default Navbar;