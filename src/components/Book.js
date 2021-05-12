import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <tr className="row">
      <th>{book.id}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
