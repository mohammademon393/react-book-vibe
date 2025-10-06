// import React, { use } from 'react';

import { Star } from "lucide-react";

const Book = ({ book }) => {
  // const bookData = use(booksPromise);
  // console.log(bookData);
  console.log(book);
  const { bookName, image, rating, category, author, tags, yearOfPublishing } =
    book;
  

  return (
    <div className="card bg-base-100 max-w-[405px] shadow-sm mt-5 border border-gray-200">
      <figure className="p-6">
        <img className="h-[220px] w-full rounded-xl" src={image} alt="Shoes" />
      </figure>

      <div className="card-body">
        <div className="card-actions justify-start">
          <div className="flex gap-5">
            {tags.map((tag) => (
              <button className="badge bg-[#05be0a0d] text-[#23be0a] font-[500]">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p className="font-normal text-lg">by: {author}</p>
        <div className="border border-dashed"></div>

        <div className="flex justify-between">
          <span>
            <p className="font-semibold text-[18px]">{category}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold text-[18px]">{rating}</p>
            <Star></Star>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Book;