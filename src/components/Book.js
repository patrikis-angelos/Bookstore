import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <tr>
      <th>{book.id}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired, //eslint-disable-line
};

export default Book;
