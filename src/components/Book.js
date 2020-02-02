/*************************************************************************************************
 * Book
 * ------
 * Book does not hold any state, therefore it can be a Stateless Functional Component
 * 
 * Caution:
 * Some of the books do not have an image or authors, so make sure to handled those cases
 * - If a book does not have an image, display a 'no image available' cover
 * - Only show the authors if there are authors to display (otherwise it will throw an error)
 * 
 * PropTypes
 * -----------
 * Don't forget to add the following PropTypes 
 * - book (object)
 * - updateShelf (function) --- this is just getting passed through for CategoryList to use
 ************************************************************************************************/


import React from 'react';
import { PropTypes } from "prop-types";

import CategoryList from './CategoryList';

const Book = (props) => {

    const { book, updateBookShelf } = props;

    // if the book does not have an image, show a default one instead
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

            {/* If the book does not list any authors, don't show this section */}
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