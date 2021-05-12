import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const state = {
  books: [
    {
      id: Math.round(Math.random() * 1000),
      title: 'Maths',
      category: 'Learning',
    },
    {
      id: Math.round(Math.random() * 1000),
      title: 'The Alchemist',
      category: 'Novel',
    },
  ],
};

const store = createStore(rootReducer, state);

export default store;
