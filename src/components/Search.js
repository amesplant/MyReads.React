import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

import Book from './Book'

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookList:[]
        }
    }

    // request the books from the BooksAPI
    componentDidMount() {
        BooksAPI.getAll()
          .then((books)=>{
            this.setState(()=>({
              bookList:books
            }))
          })
        }

    render() {
        console.log(this.state.bookList);
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        className="close-search"
                        to="/"
                    />
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {/* display the list of books */}
                        {this.state.bookList.map((book) => (
                            <li key={book.id} className="books-grid li">
                                <Book title={book.title} authors={book.authors} image={book.imageLinks.smallThumbnail} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

// TODO: Add PropTypes

export default Search