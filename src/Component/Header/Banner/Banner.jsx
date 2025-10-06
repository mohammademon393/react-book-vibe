import React from 'react';
import books from '../../../assets/books.jpg';

const Banner = () => {
    return (
      <div className="bg-[#1313130d] rounded-xl justify-center md:flex md:justify-around my-5 items-center p-10">
        <div>
          <h1 className='text-[56px] font-bold'>Books to freshen up <br /> your bookshelf</h1>
          <button className="bg-[#23be0a] text-white mt-5 btn">View The List</button>
        </div>
        <img src={books} width={500} className=' rounded-xl' alt="img comeing soon" />
      </div>
    );
};

export default Banner;