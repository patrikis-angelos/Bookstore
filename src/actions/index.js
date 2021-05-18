const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOKS = 'FETCH_BOOKS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const actions = {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, FETCH_BOOKS,
};

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

const fetchBooks = (books) => (
  {
    type: FETCH_BOOKS,
    books,
  }
);

const changeFilter = (filter) => (
  {
    type: CHANGE_FILTER,
    filter,
  }
);

export default actions;
export {
  createBook, removeBook, changeFilter, fetchBooks,
};
