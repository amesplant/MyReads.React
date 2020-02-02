/***********************************************************************************
 * CategoryList
 * ------------
 * Since CateogryList keeps track of state, we need it to be a Class Component. 
 * 
 * The state it tracks will be the Shelf that a book will reside on, which gets passed
 * down via the Book props. 
 * 
 * handleShelfChange
 * -----------------
 * We will need a method that handles the shelf change, which we grab when the user makes a
 * different shelf from the select menu. This method needs to do the following:
 * - determine which shelf the user selects
 * - store that into its state
 * - pass the change back up to the Bookshelf
 * - if the user is on the Search page, send
 *   them back to the Bookshelf
 * 
 * PropTypes
 * -----------
 * Don't forget to add the following PropTypes 
 * - book (object)
 * - updateShelf (function)
 ***********************************************************************************/

import React, { Component } from 'react'
import { PropTypes } from "prop-types";
import { withRouter } from 'react-router-dom'

class CategoryList extends Component {
    
    constructor(props) {
        super();

        this.state = {
            shelf: props.book.shelf
        }
    }

    handleShelfChange = (event) => {
        let { book, updateBookShelf } = this.props;
        // get the shelf from the select menu selection
        let shelf = event.target.value;

        // store the value in the state
        this.setState({
            shelf
        })

        // send the update back up to the Bookshelf
        updateBookShelf(book, shelf); 

        // if user is on the Search page, return them back to the Bookshelf
        if(this.props.location.pathname !== '/') {
            this.props.history.push('/')    
        }
    }
    
    render() {
        return (
            <div className="book-shelf-changer">
                
                <select value={this.state.shelf} onChange={this.handleShelfChange}> {/* set the value to the state and watch for any change */}
                    <option value="move" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        )
    };
};

CategoryList.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default withRouter(CategoryList)