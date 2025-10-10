import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    
    const singleBook = data.find((book) => String(book.bookId) === id);
    const {
      image,
      bookName,
      author,
      review,
      totalPages,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing
    } = singleBook;
    
    
    return (
      <div className="card card-side bg-base-100 shadow-sm my-6">
        <figure className="max-w-[570px] h-[625px] flex-1">
          <img src={image} alt={bookName} />
        </figure>
        <div className="card-body flex-1">
          <h2 className="font-bold text-[40px]">{bookName}</h2>
          <p className="font-[500] text-[20px] text-[#131313cc]">
            by: {author}
          </p>
          <div className="border border-dashed text-gray-300"></div>
          <p className="font-[500] text-[20px] text-[#131313cc]"> {category}</p>
          <div className="border border-dashed text-gray-300"></div>
          <p className="font-[400] text-[16px] text-[#131313b3]">
            <span className="text-black text-xl font-semibold">Review: </span>
            {review}
          </p>
          <div className="border border-dashed text-gray-300"></div>
          <div className="flex gap-4">
            <h3 className="font-[500] text-[20px]">Tags:</h3>
            {tags.map((tag) => (
              <div className="badge badge-soft badge-success">{tag}</div>
            ))}
          </div>
          <div className="border border-dashed text-gray-300"></div>
          <div>
            <p className="font-[400] text-[16px] text-[#131313b3]">
              Number of Pages:{" "}
              <span className="font-[500] text-[16px] text-black">
                {totalPages}
              </span>
            </p>
            <p className="font-[400] text-[16px] text-[#131313b3]">
              Publisher:{" "}
              <span className="font-[500] text-[16px] text-black">
                {publisher}
              </span>
            </p>
            <p className="font-[400] text-[16px] text-[#131313b3]">
              Year of Publishing:{" "}
              <span className="font-[500] text-[16px] text-black">
                {yearOfPublishing}
              </span>
            </p>
            <p className="font-[400] text-[16px] text-[#131313b3]">
              Rating:{" "}
              <span className="font-[500] text-[16px] text-black">
                {rating}
              </span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn">Read</button>
            <button className="btn btn-info text-white">Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;