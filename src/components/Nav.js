import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';

const Nav = (props) => {
  const handleFilterChange = (filter) => {
    props.filterHandler(filter);
  };

  return (
    <nav className="flex space-between nav align-center">
      <div className="flex align-center">
        <h1 className="mont-bold color-azure big">Bookstore CMS</h1>
        <div className="mont-regular color-light-grey hover-grey standar m-l-40">BOOKS</div>
        <CategoryFilter filterHandler={handleFilterChange} />
      </div>
      <div>icon</div>
    </nav>
  );
};

Nav.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default Nav;
