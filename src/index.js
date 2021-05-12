import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './styles/reset.css';
import rootReducer from './reducers/index';

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
