import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;

  const handleRemove = (book) => {
    props.removeHandler(book);
  };

  return (
    <tr className="row">
      <th>{book.id}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
      <th><button type="button" onClick={() => handleRemove(book)}>Remove</button></th>
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
