import actions from '../actions/index';

const { CREATE_BOOK, REMOVE_BOOK } = actions; //eslint-disable-line

const booksReducer = (bookState = [], action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      return [...bookState, action.book];
    }
    case REMOVE_BOOK: {
      const books = [...bookState];
      books.delete(action.book);
      return books;
    }
    default:
      return bookState;
  }
};

export default booksReducer;
