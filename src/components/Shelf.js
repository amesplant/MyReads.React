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