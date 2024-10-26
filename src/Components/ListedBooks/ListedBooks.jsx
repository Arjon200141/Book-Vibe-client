import { NavLink, Outlet } from "react-router-dom";
const ListedBooks = () => {

    return (
        <div>
            <h2 className="font-bold text-3xl text-center bg-[#1313130D] w-full py-6 rounded-lg">Books</h2>
            <div className="flex mt-24 justify-center">
                {/* <NavLink to="readbooks">
                    <p className="border-t-2 border-r-2 border-l-2 w-40 px-4">Read Books</p>
                </NavLink> */}
                <NavLink to="wishlist">
                    <p className="border-b-2 px-8">Wishlist</p>
                </NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    )
};

export default ListedBooks;
