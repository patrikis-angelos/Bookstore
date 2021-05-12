import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = categories.map((option) => (
    <option key={option} value={option}>{option}</option>
  ));
  return (
    <form>
      <label htmlFor="title">
        Title
        <input id="title" type="text" />
      </label>
      <select>
        {options}
      </select>
      <input type="submit" value="Create" />
    </form>
  );
};

export default BooksForm;
