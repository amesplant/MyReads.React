import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class CategoryList extends Component {
    
    handleShelfChange = (event) => {
        let { book, updateBookShelf } = this.props;
        let shelf = event.target.value;

        updateBookShelf(book, shelf); 

        if(this.props.location.pathname !== '/') {
            console.log(this.props.location.pathname);
            this.props.history.push('/')    
        }
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

export default withRouter(CategoryList)