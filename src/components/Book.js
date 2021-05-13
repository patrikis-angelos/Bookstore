import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;

  const handleRemove = (book) => {
    props.removeHandler(book);
  };

  return (
    <tr className="row">
      <th className="bookInfo">{book.id}</th>
      <th className="bookInfo">{book.title}</th>
      <th className="bookInfo">{book.category}</th>
      <th className="button" onClick={() => handleRemove(book)}>Remove</th>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default Book;
