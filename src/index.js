import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';

const store = setupStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
