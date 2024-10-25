import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navlinkStyles = ({ isActive }) => {
        return {
            border: isActive ? "1px solid #23BE0A" : "1px solid white",
            backgroundColor: isActive ? "none" : "rgba(255, 255, 255, 0.35)",
            color: isActive ? "#23BE0A" : "black",
            fontWeight: isActive ? "bold" : "normal"
        };
    };

    const link = (
        <>
            <li><NavLink to="/" style={navlinkStyles}>Home</NavLink></li>
            <li><NavLink to="/upcoming" style={navlinkStyles}>Upcoming</NavLink></li>
            <li><NavLink to="/listedbooks" style={navlinkStyles}>Listed Books</NavLink></li>
            <li><NavLink to="/read" style={navlinkStyles}>Pages to Read</NavLink></li>
            <li><NavLink to="/about" style={navlinkStyles}>About</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-cyan-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm gap-1 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52 text-lg">
                        {link}
                    </ul>
                </div>
                <Link to="/">
                <a className=" text-2xl font-bold"><img src="https://i.ibb.co.com/fpW5Ywc/201189010.png" alt="" className="h-14 w-32 rounded-lg" /></a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3 text-lg">
                    {link}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-[#23BE0A] text-white font-semibold text-xl px-6">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white font-semibold text-xl px-6">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;
