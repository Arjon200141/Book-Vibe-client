import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../Book/Book";

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [displayedBooks, setDisplayedBooks] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data);
                setDisplayedBooks(data.slice(0, 6)); 
            });
    }, []);

    const handleShowAll = () => {
        navigate('/booklist'); 
    };

    return (
        <div className="my-16">
            <h2 className="text-5xl font-semibold text-center mb-7">Trending Reads</h2>
            <p className="text-center text-md text-gray-600 mx-44 mb-8"> Discover the latest books captivating readers worldwide! Explore the hottest titles that everyone is buzzing about and find your next favorite read</p>
            <div className="grid lg:grid-cols-3 gap-6 mx-16">
                {displayedBooks.map((book) => (
                    <Book key={book.bookId} books={book}></Book>
                ))}
            </div>
            {!showAll && (
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={handleShowAll} 
                        className="px-6 py-2 bg-cyan-500 text-xl font-semibold text-white rounded-xl hover:bg-blue-600"
                    >Show All Books</button>
                </div>
            )}
        </div>
    );
};

export default AllBooks;
