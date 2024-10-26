import { useEffect } from "react";
import { useState } from "react";
import UpcomingBook from "../UpcomingBook/UpcomingBook";

const UpcomingBooks = () => {

    const [upcomings , setUpcomings] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/upcoming')
        .then(res => res.json())
        .then(data => setUpcomings(data))
    },[])

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center mt-8 mb-5">Books to Look Forward To</h2>
            <p className="text-md mx-40 text-center mb-8 text-gray-500">Discover the most anticipated releases in literature, curated just for you! Stay ahead of the curve and be the first to dive into these captivating stories.</p>
            <div className="mx-8 grid lg:grid-cols-3 gap-4 my-12">
                {
                    upcomings.map(upcoming => <UpcomingBook key={upcoming.bookId} upcoming={upcoming}></UpcomingBook>)
                }
            </div>
        </div>
    );
};

export default UpcomingBooks;