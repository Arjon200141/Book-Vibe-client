import PropTypes from 'prop-types'; 

const UpcomingBook = ({ upcoming }) => {
    const {  bookName, author, image, totalPages, category, tags, publisher, yearOfPublishing } = upcoming;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="h-64 pt-4"/></figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-4xl font-bold">{bookName}</h2>
                <p className="text-xl font-semibold">By : {author}</p>
                <div className="flex justify-around gap-2">
                    {
                        tags.map(tag=> <p key={upcoming.bookId} className="border-2 font-semibold bg-[#23BE0A0D] text-[#23BE0A] rounded-xl text-center"># {tag}</p>)
                    }
                </div>
                <hr />
                <div className="flex justify-between">
                    <p><span className="text-lg font-semibold">TotalPages : </span>{totalPages}</p>
                    <p><span className="text-lg font-semibold">Category : </span>{category}</p>
                </div>
                <div className="flex justify-between">
                    <p><span className="text-lg font-semibold">Publisher : </span>{publisher}</p>
                    <p><span className="text-lg font-semibold">Year of Publishing : </span>{yearOfPublishing}</p>
                </div>
                <h2 className="text-center border-2 rounded-xl text-xl py-1 font-medium bg-lime-100">Upcoming</h2>
            </div>
        </div>
    );
};
UpcomingBook.propTypes= {
    upcoming:PropTypes.Object
}

export default UpcomingBook;