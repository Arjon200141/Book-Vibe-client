import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({ books }) => {
    console.log(books);
    const { bookName, image, author, category, rating, tags, bookId } = books;
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
                <div className="flex justify-between gap-32 text-[#131313CC]">
                    <p>{category}</p>
                    <p className="flex items-center gap-1">{rating} <FaRegStar /></p>
                </div>
                <Link to={`/books/${bookId}`}>
                    <div className="mb-2">
                        <button className="bg-sky-200 text-xl font-semibold w-full rounded-md py-2">View Details</button>
                    </div>
                </Link>
            </div>
        </div >
    );
};
Book.propTypes = {
    books: PropTypes.Object
}

export default Book;