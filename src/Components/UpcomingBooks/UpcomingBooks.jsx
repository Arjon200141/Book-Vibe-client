import { useEffect } from "react";
import { useState } from "react";
import UpcomingBook from "../UpcomingBook/UpcomingBook";

const UpcomingBooks = () => {

    const [upcomings , setUpcomings] = useState([]);
    
    useEffect(()=>{
        fetch('upcoming.json')
        .then(res => res.json())
        .then(data => setUpcomings(data))
    },[])

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center bg-slate-100 py-6 mt-12">UpComing Books</h2>
            <div className="mx-24 grid lg:grid-cols-2 gap-4 my-20">
                {
                    upcomings.map(upcoming => <UpcomingBook key={upcoming.bookId} upcoming={upcoming}></UpcomingBook>)
                }
            </div>
        </div>
    );
};

export default UpcomingBooks;