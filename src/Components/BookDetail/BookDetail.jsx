import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdContactPage } from "react-icons/md";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const BookDetail = ({ book }) => {
    console.log(book);
    return (
        <div className="hero h-88 bg-base-200 w-[950px] border-2 border-solid p-4 rounded-2xl my-4 ml-28">
            <div className="hero-content flex-col lg:flex-row lg:gap-12">
                <img src={book.image} className="rounded-lg shadow-2xl h-64 " alt="Book cover" />
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold">{book.bookName}</h1>
                    <p className="py-6">By: {book.author}</p>
                    <div className="flex justify-between gap-12">

                        <div className="flex gap-6">
                            <p ><span className="font-bold">Tag: </span></p>
                            {
                                book.tags.map((tag, index) => (
                                    <p key={index} className="border-2 rounded-2xl px-5 py-1 bg-[#23BE0A0D] text-[#23BE0A] font-semibold"># {tag}</p>
                                ))
                            }
                        </div>

                        <div>
                            <p className="flex items-center gap-2"><CiLocationOn /><span className="font-semibold">Year of Publishing:</span> {book.yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-2"><GoPeople /> <span className="font-semibold">Publisher:</span> {book.publisher}</p>
                        <p className="flex items-center gap-2"><MdContactPage /> <span className="font-semibold">Page:</span> {book.totalPages}</p>
                    </div>
                    <hr />

                    <div className="flex justify-between">
                        <p className="border-2 rounded-3xl bg-[#328EFF26] text-[#328EFF] px-6 py-2 font-semibold"><span>Category:</span> {book.category}</p>
                        <p className="border-2 rounded-3xl bg-[#FFAC3326] text-[#FFAC33] px-6 py-2 font-semibold"><span>Rating:</span> {book.rating}</p>
                        <Link to={`/books/${book.bookId}`}>
                            <button className="btn bg-[#23BE0A] px-4 text-white font-semibold rounded-3xl">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookDetail.propTypes = {
    book: PropTypes.object
}

export default BookDetail;
