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
            {filteredBooks.map(book => <BookDetail key={book.bookId} book={book} />)}
        </div>
    );
};

export default Wishlist;
