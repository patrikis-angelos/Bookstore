const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      return {
        books: [...state.books, action.book],
      };
    }
    case 'REMOVE_BOOK': {
      const books = [...state.books];
      books.delete(action.book);
      return {
        books,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
