import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

import Book from './Book'

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query:'',
            bookList:[]
        }
    }

    // get all of the books that match the search value (query)
    // in order to later map through the results, bookList needs to remain as an array
    showBooks = (query) => {
        BooksAPI.search(query)
        .then((books)=>{
            if (Array.isArray(books)) {
            this.setState(() => ({
                bookList: books 
            }))
        } else {
              // not found
               this.setState({
                   bookList: []
               })} 
            
        })
    }
        
    updateQuery = (event) => {
        let query = event.target.value.trim()
        this.setState({
            query: query
        })
        this.showBooks(this.state.query);
    }


    render() {
        
        const { query, bookList } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        className="close-search"
                        to="/"
                    />
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query} 
                            onChange={this.updateQuery}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {bookList.map((book) => (
                            <li key={book.id} className="books-grid li">
                                <Book 
                                    title={book.title} 
                                    authors={book.authors} 
                                    image={
                                        book.imageLinks ? `${book.imageLinks.smallThumbnail}` : '/images/no_image_available.gif'
                                    }
                                    previewLink={book.previewLink}
                                />
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