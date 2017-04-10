import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned here will show up as props on the BookList
  return {
    books: state.books
  }
}

// anything returned from this will be a props on the BookList
function mapDispatchToProps(dispatch) {
  // whenever selecBook is called, the result is passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList to container - it needs to know about the dispatch method, selectBook
// make it available as a prop
export default connect (mapStateToProps, mapDispatchToProps) (BookList);