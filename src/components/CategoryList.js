import React, { Component } from 'react'

class CategoryList extends Component {
    
    handleShelfChange = (event) => {
        let { book, updateBookShelf } = this.props;
        let shelf = event.target.value;

        updateBookShelf(book, shelf);        
    }
    
    render() {


        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleShelfChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        )
    }
}

// TODO: Add PropTypes

export default CategoryList