import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';
import './assets/reset.css';
import './assets/styles.css';

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
  filter: '',
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
