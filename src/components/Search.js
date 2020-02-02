/***************************************************************
 * Search
 * ---------
 * This component is to search for books to add to the BookShelf
 * Since it holds state (the search query and books), 
 * it needs to be a Class Component
 * 
 * handleSearch
 * ------------
 * method to search the Books database based on the user's query
 * - capture what the user types into the input query
 * - update the query state
 * - display the books that match the search query (showBooks)
 * 
 * showBooks
 * --------
 * - make sure that the fetch returns an Array of books
 *   before attempting to show the books
 * - if an array of books is returned, update the 'books' state
 * - if no books are found, set the 'books' state to an empty array
 * -- changing the state will automatically force the UI to render again
 * 
 * PropTypes
 * -----------
 * Don't forget to add the following PropTypes
 * - updateBookShelf (function) --- just passing through
 ***************************************************************/

import React, { Component } from 'react'
import { PropTypes } from "prop-types";

import { Link } from 'react-router-dom'
import {search } from '../BooksAPI'

import Book from './Book'

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query:'',
            books:[]
        }
    }

    
    // get all of the books that match the search value (query)
    // in order to later map through the results, books needs to remain as an array
    showBooks = (query) => {
        search(query)
        .then((books)=>{
            if (Array.isArray(books)) {
            this.setState(() => ({
                books 
            }))
        } else {
              // not found
               this.setState({
                   books: []
               })} 
            
        })
    }
        
    handleSearch = (event) => {
        let query = event.target.value;
        this.setState({
            query
        })
        this.showBooks(query);
    }


    render() {
        
        const { query, books } = this.state;
        const { updateBookShelf } = this.props;

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
                            onChange={this.handleSearch}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id} className="books-grid li">
                                <Book 
                                    book={book} 
                                    updateBookShelf = {updateBookShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    updateBookShelf: PropTypes.func.isRequired
}

export default Search