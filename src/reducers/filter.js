import actions from '../actions/index';

const { CHANGE_FILTER } = actions;

const filterReducer = (filterState = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const { filter } = action;
      return filter;
    }
    default:
      return filterState;
  }
};

export default filterReducer;
