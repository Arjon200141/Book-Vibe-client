import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";
const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])
    return (
        <div className="p-8">
            <h2 className="text-6xl font-semibold text-center my-12">Books</h2>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    allBooks.map(books => <Book key={books.bookId} books={books}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;