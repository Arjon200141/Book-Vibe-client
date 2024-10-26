import PropTypes from 'prop-types'; 

const UpcomingBook = ({ upcoming }) => {
    const {  bookName, author, image, totalPages, category, tags, publisher, yearOfPublishing } = upcoming;
    return (
        <div className="card bg-white/40 shadow-xl">
            <figure><img src={image} alt="Shoes" className="h-64 pt-4 w-full px-4 "/></figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-4xl font-bold">{bookName}</h2>
                <p className="text-xl font-semibold">By : {author}</p>
                <div className="flex justify-around gap-2">
                    {
                        tags.map(tag=> <p key={upcoming.bookId} className="border-2 font-semibold bg-[#23BE0A0D] text-[#23BE0A] rounded-xl text-center"># {tag}</p>)
                    }
                </div>
                <hr />
                <div className="flex justify-between mb-0">
                    <p><span className="text-lg font-semibold">Total Pages : </span>{totalPages}</p>
                    <p><span className="text-lg font-semibold">Category : </span>{category}</p>
                </div>
                <div className="space-y-2">
                    <p><span className="text-lg font-semibold ">Publisher : </span>{publisher}</p>
                    <p><span className="text-lg font-semibold ">Year of Publishing : </span>{yearOfPublishing}</p>
                </div>
            </div>
        </div>
    );
};
UpcomingBook.propTypes= {
    upcoming:PropTypes.Object
}

export default UpcomingBook;