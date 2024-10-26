import BookDetail from "../BookDetail/BookDetail";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishedBooks } from "../../utility/localStorage";

const Wishlist = () => {
    const booksData = useLoaderData();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksData);
    }, [booksData]);

    const wishbookId = getWishedBooks();
    const filteredBooks = books.filter(book => wishbookId.includes(book.bookId));

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center mt-8 mb-5">Bookish Desires</h2>
            <p className="text-md mx-44 text-center mb-8 text-gray-500">A curated selection of the most anticipated books that ignite every reader's passion. Discover upcoming titles across genres to fuel your literary cravings</p>
            <div>
                {filteredBooks.map(book => <BookDetail key={book.bookId} book={book} />)}
            </div>
        </div>
    );
};

export default Wishlist;
