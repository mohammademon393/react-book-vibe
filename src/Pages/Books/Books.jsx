import React, { Suspense } from 'react';
import Book from '../Book/Book';

const booksPromise = fetch('./books.json').then(res => res.json())

const Books = () => {
    return (
        <div className='my-10'>
            <h1 className='font-bold text-center text-3xl'>Books</h1>
            <Suspense fallback={<span>Looding....</span>}>
                <Book booksPromise={booksPromise}></Book>
            </Suspense>
        </div>
    );
};

export default Books;