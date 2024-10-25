import { NavLink, Outlet } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";

const ListedBooks = () => {

    return (
        <div>
            <h2 className="font-bold text-3xl text-center bg-[#1313130D] w-full py-6 rounded-lg">Books</h2>
            <div className="dropdown dropdown-hover flex justify-center mt-6">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white text-xl font-semibold w-48 flex justify-center">Sort By <IoIosArrowDropdown className="h-5 w-5" /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu mt-16 p-2 shadow bg-base-100 rounded-box w-48">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </div>

            <div className="flex mt-24 ml-32">
                <NavLink to="readbooks">
                    <p className="border-t-2 border-r-2 border-l-2 w-40 px-4">Read Books</p>
                </NavLink>
                <NavLink to="wishlist">
                    <p className="border-b-2 px-8">Wishlist</p>
                </NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    )
};

export default ListedBooks;
