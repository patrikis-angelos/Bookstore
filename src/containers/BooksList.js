import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = (props) => {
  const { books } = props;

  const handleRemove = (book) => {
    props.removeBook(book);
  };

  const list = books.map((book) => (
    <Book removeHandler={() => handleRemove(book)} key={book.id} book={book} />
  ));

  return (
    <table className="table">
      <tbody>
        <tr className="row headers">
          <th className="bookInfo">Book ID</th>
          <th className="bookInfo">Title</th>
          <th className="bookInfo">Category</th>
          <th className="bookInfo"> </th>
        </tr>
        {list}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
