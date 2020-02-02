/********************************************************************************
 * Shelf 
 * -----------------------------------------------
 * is a Functional Component that displays a list of books that have been passed down
 * from the Bookshelf and filtered by its assigned category (also passed down from the Bookshelf)
 * Shelf holds no state, but rather has properties passed into it to decide which books to display.
 * 
 * Shelf needs Books, and so it imports and uses the Book component, which gets passed, through properties, 
 * the book to display as well as the method to update the Bookshelf via the CategoryList select
 * menu.
 * 
  * PropTypes
 * -----------
 * Don't forget to add the following PropTypes 
 * - bookshelf (array) --- array of books that the shelf will need to display
 * - shelf (string) --- the self category (currentlyReading, wantToRead, Read)
 * - shelfTitle (string) ---- the display title for the shelf
 * - updateBookShelf (function) --- just passing through
 *********************************************************************************/


import React from 'react';
import { PropTypes } from "prop-types";

import Book from './Book';

const Shelf = (props) => {

    const { bookShelf, shelf, shelfTitle, updateBookShelf } = props;

    const filterBookShelf = (shelf) => {
        const filtered = bookShelf.filter(book => book.shelf === shelf);
        return filtered;
    };

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {filterBookShelf(shelf).map(book => (
                    <li key={book.id}>
                        <Book 
                            book={book} 
                            updateBookShelf={updateBookShelf} 
                        />
                    </li>
                ))}
                </ol>
            </div>
        </div>
    );
};

Shelf.propTypes = {
    bookShelf: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Shelf