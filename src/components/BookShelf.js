import React from 'react';
import  { Link } from 'react-router-dom';
import { PropTypes } from "prop-types";

import Shelf from './Shelf'

const BookShelf = (props) => {

    const { bookShelf, updateBookShelf } = props;
    
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf 
                        bookShelf = {bookShelf} 
                        updateBookShelf={updateBookShelf}
                        shelf="currentlyReading"
                        shelfTitle="Currently Reading"
                    />
                    <Shelf 
                        bookShelf = {bookShelf} 
                        updateBookShelf={updateBookShelf}
                        shelf="wantToRead"
                        shelfTitle="Want to Read"
                    />
                    <Shelf 
                        bookShelf = {bookShelf} 
                        updateBookShelf={updateBookShelf}
                        shelf="read"
                        shelfTitle="Read"
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a Book</Link>
            </div>
        </div>
    );
};

BookShelf.propTypes = {
    bookShelf: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default BookShelf