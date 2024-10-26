import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";
const BookList = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])
    return (
        <div className="p-8">
            <h2 className="text-5xl font-semibold text-center mt-8 mb-5">Explore Our Entire Collection</h2>
            <p className="text-md mx-32 text-center mb-8 text-gray-500">Dive into a world of knowledge and imagination with our vast selection of books across various genres. Whether you’re seeking the latest bestsellers or timeless classics, there’s something here for every reader!</p>
            <div className="grid lg:grid-cols-3 gap-4 mx-8">
                {
                    allBooks.map(books => <Book key={books.bookId} books={books}></Book>)
                }
            </div>
        </div>
    );
};
export default BookList;