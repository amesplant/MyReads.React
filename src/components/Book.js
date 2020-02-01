import React, { Component } from 'react'
import CategoryList from './CategoryList'

class Book extends Component {
    // TODO: Add State
    // bookImage
    // bookTitle
    // bookAuthor
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
                    <CategoryList />
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        )
    }
}

// TODO: Add PropTypes

export default Book