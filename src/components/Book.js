import React, { Component } from 'react'
import CategoryList from './CategoryList'

class Book extends Component {

    
    render() {
        const { image, title, authors, previewLink } = this.props;
        console.log("authors: ", authors);
        return (
            <a href={previewLink} className="book" target="_blank" >
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                    <CategoryList />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">
                    {authors.join(', ')}
                </div>
            </a>
        )
    }
}

// TODO: Add PropTypes

export default Book