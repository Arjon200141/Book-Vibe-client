import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/axiossecure";
import { IoPricetagsOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const Book = ({ books }) => {
    const { bookName, image, author, category, rating, tags, bookId , price } = books;
    const axiossecure = useAxiosSecure();
    console.log(books);
    const handleAddtoCart = item =>{
    // if(user && user.email){
    //     console.log(user.email,food);
        const cartItem = {
            bookName,
            author,
            category,
            image,
            price
        }
        axiossecure.post('http://localhost:5000/carts',cartItem)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: `${bookName} Added to Cart Successfully!!`,
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
        <div className="card lg:h-[580px] bg-sky-50/35 shadow-sm border-2 pt-8">
            <figure><img src={image} alt="Book" className="w-full h-72 px-4" /></figure>
            <div className="card-body">
                <div className="card-actions justify-between">
                    {
                        tags.map(tag => <p key={tag.id} className="border-2 font-semibold bg-[#23BE0A0D] text-[#23BE0A] rounded-xl text-center">{tag}</p>)
                    }
                </div>
                <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                <p className="border-b-2 border-dashed border-[#13131326] pb-4 font-medium ">By : {author}</p>
                <p><span className="font-semibold">Category : </span>{category}</p>
                <div className="flex justify-between gap-32 text-[#131313CC]">
                    
                    <p className="flex items-center gap-2 font-semibold "><IoPricetagsOutline />{price} $</p>
                    <p className="flex items-center gap-1">{rating} <FaRegStar /></p>
                </div>
                <div className="flex gap-4">
                
                    <div className="mb-2">
                        <button onClick={()=>handleAddtoCart(books)} className="bg-lime-200 text-xl font-semibold w-full px-4 rounded-md py-2">Add to Cart</button>
                    </div>
                
                <Link to={`/books/${bookId}`}>
                    <div className="mb-2">
                        <button className="bg-sky-200 text-xl font-semibold w-full px-4 rounded-md py-2">View Details</button>
                    </div>
                </Link>
                </div>
            </div>
        </div >
    );
};
Book.propTypes = {
    books: PropTypes.Object
}

export default Book;