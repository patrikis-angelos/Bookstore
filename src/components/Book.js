import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;

  const handleRemove = (book) => {
    props.removeHandler(book);
  };

  return (
    <div className="book flex space-between align-center m-t-40 p-l-30">
      <div>
        <p className="color-dark-grey mont-bold standard m-b-10">{book.category}</p>
        <p className="medium roboto-bold m-b-5">{book.title}</p>
        <p className="color-blue standard m-b-20 roboto-light">Author</p>
        <button type="button" className="book-button color-blue roboto-light m-r-10">Comment</button>
        <button
          type="button"
          onClick={() => handleRemove(book)}
          className="book-button color-blue roboto-light m-r-10"
        >
          Remove
        </button>
        <button type="button" className="book-button color-blue roboto-light m-r-10">Edit</button>
      </div>
      <div className="flex align-center">
        <div className="complition-border m-r-20">
          <div className="incomplete" />
          <div className="complition-inner" />
        </div>
        <div className="text-center mont-regular color-black">
          <p className="big">0%</p>
          <p className="color-dark-grey standard mont-regular">Completed</p>
        </div>
      </div>
      <div>
        <p className="standard roboto-light color-dark-grey m-b-10">CURRENT CHAPTER</p>
        <p className="regular roboto-light color-black m-b-30">Chapter 1: &apos;Introduction&apos;</p>
        <button className="progress-button background-azure color-white roboto-light standard" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
