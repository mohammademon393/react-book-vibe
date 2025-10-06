import React, { Suspense } from 'react';
import Book from '../Book/Book';

// const booksPromise = fetch('./books.json').then(res => res.json())

const Books = ({ data }) => {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-center text-3xl">Books</h1>
      <div className="grid md:grid-cols-3 mt-5">
        <Suspense fallback={<span>Looding....</span>}>
          {data.map((book) => (
            <Book book={book} key={book.bookId}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;