import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './css/App.css'
import  { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Search from './components/Search'
import BookShelf from './components/BookShelf'

//TODO: change imports as Components are created
import Book from './components/Book'

class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    // TODO: pass to the BookShelf a list of books
                    <BookShelf />
                )} />

                <Route path='/search' component={Search} />      
            </div>
        )
    }
}

export default BooksApp
