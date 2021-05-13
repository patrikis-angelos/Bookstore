const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';
const actions = { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };

const createBook = (book) => (
  {
    type: CREATE_BOOK,
    book,
  }
);

const removeBook = (book) => (
  {
    type: REMOVE_BOOK,
    book,
  }
);

const changeFilter = (category) => (
  {
    type: CHANGE_FILTER,
    filter: category,
  }
);

export default actions;
export { createBook, removeBook, changeFilter };
