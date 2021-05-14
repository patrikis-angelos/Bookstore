import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import categories from '../assets/categories';

const BooksForm = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = (e) => {
    const change = e.target.id;
    if (change === 'title') {
      setTitle(e.target.value);
    } else if (change === 'categories') {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: Math.round(Math.random() * 1000),
      title,
      category,
    };
    props.createBook(book);
  };

  const options = categories.map((option) => (
    <option key={option} value={option}>{option}</option>
  ));

  return (
    <div className="p-l-100 p-r-100 m-t-40">
      <h2 className="medium color-dark-grey mont-bold">ADD NEW BOOK</h2>
      <form
        onChange={(e) => handleChange(e)}
        onSubmit={(e) => handleSubmit(e)}
        className="create-book flex space-between m-t-10"
      >
        <input className="title color-dark-grey" id="title" type="text" placeholder="Book title" />
        <div className="select-wrapper relative">
          <select className="form-select background-white color-dark-grey" id="categories">
            {options}
          </select>
          <div className="arrow absolute" />
        </div>
        <input className="submit-button background-azure color-white roboto-bold standard" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
