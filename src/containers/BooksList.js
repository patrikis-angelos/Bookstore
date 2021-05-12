import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { createBook, removeBook } from '../actions/index';

const BooksList = (props) => {
  const { books } = props;
  const list = books.map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <table>
      <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {list}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  createBook: () => dispatch(createBook),
  removeBook: () => dispatch(removeBook),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
