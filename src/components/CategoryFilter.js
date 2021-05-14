import React from 'react';
import PropTypes from 'prop-types';
import categories from '../assets/categories';

const CategoryFilter = (props) => {
  const filters = ['All', ...categories];
  const options = filters.map((option) => (
    <option key={option} value={option}>{option}</option>
  ));

  const handleFilterChange = (e) => {
    const filter = e.target.value === 'All' ? '' : e.target.value;
    props.filterHandler(filter);
  };

  return (
    <select
      className="select"
      onChange={(e) => handleFilterChange(e)}
    >
      {options}
    </select>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
