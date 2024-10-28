import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/axiossecure";

const Manage = () => {
    const books = useLoaderData(); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

    const [cart, refetch] = useCart(); 
    const axiosSecure = useAxiosSecure(); 
    const totalPages = Math.ceil(books.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/books/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch(); 
                        Swal.fire("Deleted!", "Your product has been deleted.", "success");
                    }
                });
            }
        });
    };

    return (
        <div className="mb-16 mt-8">
            <h2 className="text-5xl font-semibold text-center mb-12">Manage All Books</h2>
            <div className="overflow-x-auto mx-20">
                <table className="table">
                    <thead className="text-xl">
                        <tr>
                            <th>Sl No</th>
                            <th>Image</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Category</th>
                            <th>Publisher</th>
                            <th>Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {currentBooks.map((book, index) => (
                            <tr key={book._id}>
                                <th>{indexOfFirstItem + index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask rounded-sm h-16 w-16">
                                                <img src={book.image} alt="Book Cover" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{book.bookName}</td>
                                <td>{book.author}</td>
                                <td>{book.category}</td>
                                <td>{book.publisher}</td>
                                <td>{book.price} $</td>
                                <td className="flex items-center justify-center gap-2 mt-2">
                                    <Link to={`/updatebooks/${book._id}`}>
                                        <button className="btn btn-ghost btn-xl text-xl">
                                            <CiEdit />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(book._id)}
                                        className="btn btn-ghost btn-xl text-xl"
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-center mt-8">
                    {[...Array(totalPages).keys()].map((number) => (
                        <button
                            key={number}
                            onClick={() => handlePageChange(number + 1)}
                            className={`mx-1 px-4 py-2 rounded ${
                                currentPage === number + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`}
                        >
                            {number + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Manage;
