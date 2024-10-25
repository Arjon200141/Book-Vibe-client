import BookDetail from "../BookDetail/BookDetail";
import { useEffect, useState } from "react";
import { getReadBooks } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
    const books = useLoaderData();
    console.log(books);
    const [list, setList] = useState([]);

    useEffect(() => {
        const readbookId = getReadBooks();

        const filteredBooks = [];

        for (const bookId of readbookId) {
            const exist = books.find(book => book.bookId === bookId);
            if (exist) {
                filteredBooks.push(exist);
            }
        }

        setList(filteredBooks);
    }, [books]);
    return (
        <div>
            {list.map(book => <BookDetail key={book.bookId} book={book} />)}
        </div>
    );
};

export default ReadBooks;