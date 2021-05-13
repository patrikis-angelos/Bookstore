import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = categories.map((option) => (
    <option key={option} value={option}>{option}</option>
  ));

  const handleFilterChange = (e) => {
    const filter = e.target.value === 'All' ? '' : e.target.value;
    props.filterHandler(filter);
  };

  return (
    <select onChange={(e) => handleFilterChange(e)}>
      {options}
    </select>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
