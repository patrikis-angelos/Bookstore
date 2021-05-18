import actions from '../actions/index';

const { CREATE_BOOK, REMOVE_BOOK, FETCH_BOOKS } = actions;

const booksReducer = (bookState = [], action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      return [...bookState, action.book];
    }
    case REMOVE_BOOK: {
      const books = [...bookState];
      for (let i = 0; i < books.length; i += 1) {
        if (books[i] === action.book) {
          books.splice(i, 1);
          break;
        }
      }
      return books;
    }
    case FETCH_BOOKS: {
      return action.books;
    }
    default:
      return bookState;
  }
};

export default booksReducer;
