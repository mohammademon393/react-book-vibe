import React, { use } from 'react';

const Book = ({ booksPromise }) => {

    const bookData = use(booksPromise);
    console.log(bookData);
    

  return <div></div>;
};

export default Book;