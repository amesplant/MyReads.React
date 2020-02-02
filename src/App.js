import React from 'react'
import * as BooksAPI from './BooksAPI'
import './css/App.css'
import { Route } from 'react-router-dom'

import Search from './components/Search'
import BookShelf from './components/BookShelf'

class BooksApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookShelf:[]
        }
    }
    
    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.getAllBooks()
        });
    };
    
    getAllBooks = (book, shelf) => {
        BooksAPI.getAll()
        .then((books)=>{
            this.setState(() =>({
                bookShelf: books
            }))
        })
    }
    
    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    // TODO: pass to the BookShelf a list of books
                    <BookShelf 
                        bookShelf={this.state.bookShelf} 
                        updateBookShelf={this.updateBookShelf}
                    />
                )} />

                <Route path='/search' render={() => (
                    <Search 
                        updateBookShelf={this.updateBookShelf}
                    />
                )} />   
            </div>
        )
    }
}

export default BooksApp
