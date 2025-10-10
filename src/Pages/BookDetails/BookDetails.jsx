import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
    const {bookId} = useLoaderData();
    console.log(bookId);
    
    
    
    return (
        <div>
            <h1>Books details</h1>
        </div>
    );
};

export default BookDetails;