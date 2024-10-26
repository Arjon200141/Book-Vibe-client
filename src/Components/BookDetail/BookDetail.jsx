import { CiLocationOn, CiStar } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdContactPage, MdOutlineDelete } from "react-icons/md";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const BookDetail = ({ book }) => {
    console.log(book);
    return (
        <div className="flex justify-center">
            <div className="hero mx-24 h-88 bg-white/35  border-2 border-solid p-4 rounded-2xl my-4 ">
                <div className="hero-content  flex-col lg:flex-row lg:gap-20">
                    <img src={book.image} className="rounded-lg shadow-2xl h-72 " alt="Book cover" />
                    <div className="space-y-3 ">
                        <h1 className="text-5xl font-bold">{book.bookName}</h1>
                        <p className="py-3">By: {book.author}</p>
                        <div className="flex justify-between gap-12">
                            <div className="flex items-center gap-6">
                                <p ><span className="font-bold">Tag: </span></p>
                                {
                                    book.tags.map((tag, index) => (
                                        <p key={index} className="border-2 rounded-2xl px-5 py-1 bg-[#23BE0A0D] text-[#23BE0A] font-semibold"># {tag}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-2"><CiLocationOn /><span className="font-semibold">Year of Publishing:</span> {book.yearOfPublishing}</p>
                            <p className="flex items-center gap-2"><CiStar /><span className="font-semibold">Rating:</span> {book.rating}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-2"><GoPeople /> <span className="font-semibold">Publisher:</span> {book.publisher}</p>
                            <p className="flex items-center gap-2"><MdContactPage /> <span className="font-semibold">Page:</span> {book.totalPages}</p>
                        </div>
                        <hr />
                        <div className="flex gap-6">
                            <p className="border-2 rounded-3xl bg-[#328EFF26] text-[#328EFF] px-6 py-2 font-semibold"><span>Category:</span> {book.category}</p>

                            <Link to={`/books/${book.bookId}`}>
                                <button className="btn bg-[#23BE0A] px-6 text-lg text-white font-semibold rounded-3xl">Remove from wishlist <MdOutlineDelete /></button>
                            </Link>
                        </div>
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
