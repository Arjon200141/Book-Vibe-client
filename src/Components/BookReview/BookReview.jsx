
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SetReadBooks , SetWishedBooks, getReadBooks} from '../../utility/localStorage'


const BookReview = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId) 
    const book = books.find(book => book.bookId === bookIdInt);

    const handleWishlist = () => {
        SetWishedBooks(bookIdInt);
    };

    const handleRead = () => {
        const isReadbook = getReadBooks();
        const exist = isReadbook.find(bookId => bookId == bookIdInt);
        if (!exist) {
            SetReadBooks(bookIdInt);
            toast.success('You have marked the book as read..');
        } else {
            toast.warn('You have already read the book!!');
        }
    };

    return (
        <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 border-2 px-4 rounded-xl">
                <img src={book.image} alt="" className="h-full py-4" />
            </div>
            <div className="col-span-2 border-2 px-8 rounded-xl py-12">
                <h2 className="text-4xl font-bold my-4">{book.bookName}</h2>
                <p className="text-xl font-medium my-4">By : {book.author}</p>
                <hr />
                <p className="text-xl font-medium my-4">{book.category}</p>
                <hr />
                <p className="my-4 pr-8"><span className="font-bold ">Review :</span>{book.review}</p>
                <p className="my-4 flex gap-12"><span className="font-bold ">Tag : </span>

                    {
                        book.tags.map(tags => <p key={book.bookId} className="border-2 rounded-2xl px-5 bg-[#23BE0A0D] text-[#23BE0A] font-semibold"># {tags}</p>)
                    }

                </p>
                <hr />
                <div className="space-y-4 mt-4">
                    <p className="flex justify-between lg:pr-36">Number of Pages : <span className="font-bold">{book.totalPages}</span></p>
                    <p className="flex justify-between lg:pr-36">Publisher : <span className="font-bold">{book.publisher}</span></p>
                    <p className="flex justify-between lg:pr-36">Year of Publishing : <span className="font-bold">{book.yearOfPublishing}</span></p>
                    <p className="flex justify-between lg:pr-36">Rating : <span className="font-bold">{book.rating}</span></p>
                </div>
                <div className="flex gap-28 mt-8">
                    <button onClick={handleRead} className="btn px-12 bg-white text-lg font-semibold border-2 border-[black] text-black">Read</button>
                    <button onClick={handleWishlist} className="btn px-8 bg-[#50B1C9] text-lg font-semibold text-white">Wishlist</button>
                    <ToastContainer />
                </div>

            </div>

        </div>
    );
};

export default BookReview;