import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import Nav from '../components/Nav';

const BooksList = (props) => {
  const { books } = props;

  const handleRemove = (book) => {
    props.removeBook(book);
  };

  const handleFilterChange = (filter) => {
    props.changeFilter(filter);
  };

  const mapBooks = (books) => {
    const list = books.map((book) => (
      <Book removeHandler={() => handleRemove(book)} key={book.id} book={book} />
    ));
    return list;
  };

  const selectBooks = (books) => {
    const { filter } = props;
    let list = [];
    if (filter === '') {
      list = mapBooks(books);
    } else {
      list = books.filter((book) => (book.category === filter));
      list = mapBooks(list);
    }
    return list;
  };

  const list = selectBooks(books);

  return (
    <div>
      <Nav filterHandler={handleFilterChange} />
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
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
