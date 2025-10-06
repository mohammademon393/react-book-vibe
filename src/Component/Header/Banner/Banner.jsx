import React from 'react';
import books from '../../../assets/books.jpg';

const Banner = () => {
    return (
      <div className="bg-[#1313130d] rounded-2xl flex justify-between my-5 items-center p-5">
        <div>
          <h1>Books to freshen up your bookshelf</h1>
          <button className="bg-[#23be0a] btn">View The List</button>
        </div>
        <img src={books} alt="" />
      </div>
    );
};

export default Banner;