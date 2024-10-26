import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-10">
            <h2 className="text-5xl font-semibold text-center mb-4">The Final Verdict: Honest Reviews</h2>
            <p className="text-center text-md text-gray-600 mx-32">Explore genuine opinions from fellow readers, sharing what they loved, disliked, and how the book resonated with them. Dive into unbiased feedback to help you find your next favorite read!</p>
            <div className="grid grid-cols-3 gap-4 m-8 mx-16">
                {
                    reviews.map((review) => <div className="border-2 shadow-xl px-8 py-4 bg-white/35 rounded-xl" key={review.id}>
                        <div className="flex justify-center"><img src={review.image} alt="" className="h-16 w-20 rounded-sm" /></div>
                        <div className="flex justify-between font-semibold mt-4 mx-2 text-xl">
                        <h2 className="flex items-center gap-2"><MdOutlinePeople />{review.reviewer_name}</h2>
                        <p className="flex items-center gap-2"><CiStar />{review.rating}</p>
                        </div>
                        <p className="text-md mt-4">{review.review_details}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;