import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

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

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = categories.map((option) => (
    <option key={option} value={option}>{option}</option>
  ));

  return (
    <form
      onChange={(e) => handleChange(e)}
      onSubmit={(e) => handleSubmit(e)}
      className="createBook"
    >
      <label className="formField" htmlFor="title">
        Title:
        <input id="title" type="text" />
      </label>
      <label className="formField" htmlFor="categories">
        Choose Category:
        <select id="categories">
          {options}
        </select>
      </label>
      <input className="formField" type="submit" value="Create" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
