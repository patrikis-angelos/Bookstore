import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = categories.map((option) => (
    <option key={option} value={option}>{option}</option>
  ));
  return (
    <form className="createBook">
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

export default BooksForm;
