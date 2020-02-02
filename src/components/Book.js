import React from 'react';
import { PropTypes } from "prop-types";

import CategoryList from './CategoryList';

const Book = (props) => {

    const { book, updateBookShelf } = props;
    const bookImage = book.imageLinks ? `${book.imageLinks.smallThumbnail}` : '/images/no_image_available.gif'
                                
    
    return (
        <div className="book">
            <a className="book-top" href={book.previewLink} target="_blank" rel="noopener noreferrer">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
            </a>
            <CategoryList 
                book={book}
                updateBookShelf={updateBookShelf} 
            />
            <div className="book-title">{book.title}</div>

            {book.authors &&
                <div className="book-authors">
                    {book.authors.join(', ')}
                </div>
            }
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default Book;