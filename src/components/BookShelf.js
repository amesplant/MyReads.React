import React, { Component } from 'react'
import  { Link } from 'react-router-dom'

import Book from './Book'

class BookShelf extends Component {
    
    
    render() {        
        
        const { bookShelf, updateBookShelf } = this.props;

        const wantToReadBooks = bookShelf.filter((book) => {
            return book.shelf === "wantToRead";
        })

        const readBooks = bookShelf.filter((book) => {
            return book.shelf === "read";
        })

        const currentlyReadingBooks = bookShelf.filter((book) => {
            return book.shelf === "currentlyReading";
        })
        
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {currentlyReadingBooks.map((book) => (
                                    <li key={book.id} className="books-grid li">
                                        <Book 
                                            book = {book} 
                                            updateBookShelf={updateBookShelf}
                                        />
                                    </li>
                                ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {wantToReadBooks.map((book) => (
                                    <li key={book.id} className="books-grid li">
                                        <Book 
                                            book = {book} 
                                            updateBookShelf={updateBookShelf}
                                        />
                                    </li>
                                ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {readBooks.map((book) => (
                                    <li key={book.id} className="books-grid li">
                                        <Book 
                                            book = {book} 
                                            updateBookShelf={updateBookShelf}
                                        />
                                    </li>
                                ))}                                            
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a Book</Link>
                </div>
            </div>
        )
    }
}

// TODO: Add PropTypes

export default BookShelf




