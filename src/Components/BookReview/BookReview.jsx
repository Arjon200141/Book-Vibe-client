
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SetWishedBooks} from '../../utility/localStorage'
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/axiossecure";


const BookReview = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdInt);

    const handleWishlist = () => {
        SetWishedBooks(bookIdInt);
    };

    // const handleRead = () => {
    //     const isReadbook = getReadBooks();
    //     const exist = isReadbook.find(bookId => bookId == bookIdInt);
    //     if (!exist) {
    //         SetReadBooks(bookIdInt);
    //         toast.success('You have marked the book as read..');
    //     } else {
    //         toast.warn('You have already read the book!!');
    //     }
    // };

    const axiossecure = useAxiosSecure();
    console.log(books);
    const handleAddtoCart = item => {
        // if(user && user.email){
        //     console.log(user.email,food);
        const cartItem = {
            bookName: book.bookName,
            author: book.author,
            category: book.category,
            image: book.image,
            price: book.price
        }
        axiossecure.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: `${book.bookName} Added to Cart Successfully!!`,
                        icon: "success"
                    });
                }
            })

        // }
        // else{
        //     alert("User is Not Logged In!");
        //     navigate('/login');
        // }
    }

    return (
        <div>

            <div className="grid grid-cols-4 gap-2 mx-12 my-16">
                <div className="col-span-2 border-2 px-4 rounded-xl flex justify-center">
                    <img src={book.image} alt="" className="h-full py-8" />
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
                        <p className="flex justify-between lg:pr-36">Rating : <span className="font-bold">{book.price} $ </span></p>
                    </div>
                    <div className="flex gap-6 mt-8">
                        <div className="mb-2 w-full">
                            <button onClick={() => handleAddtoCart(book)} className="bg-lime-200 text-xl font-semibold w-full px-4 rounded-md py-2">Add to Cart</button>
                        </div>
                        <div className="w-full">
                            <button onClick={handleWishlist} className="btn px-4 bg-[#50B1C9] text-lg font-semibold w-full text-white">Wishlist</button>
                        </div>
                        <ToastContainer />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BookReview;