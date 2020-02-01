import React from 'react'
import * as BooksAPI from './BooksAPI'
import './css/App.css'
import { Route } from 'react-router-dom'

import Search from './components/Search'
import BookShelf from './components/BookShelf'

//TODO: change imports as Components are created

class BooksApp extends React.Component {


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
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    // TODO: pass to the BookShelf a list of books
                    <BookShelf />
                )} />

                <Route path='/search' render={() => (
                    <Search  bookList={this.state.bookList} />
                )} />   
            </div>
        )
    }
}

export default BooksApp
