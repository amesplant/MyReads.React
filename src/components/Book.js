import React, { Component } from 'react'
import CategoryList from './CategoryList'

class Book extends Component {
    
    render() {

        const { book, updateBookShelf } = this.props;
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
                <div className="book-authors">
                    {book.authors.join(', ')}
                </div>
            </div>
        )
    }
}

// TODO: Add PropTypes

export default Book