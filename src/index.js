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
      id: Math.random(),
      title: 'title',
      category: 'fcrfr',
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
