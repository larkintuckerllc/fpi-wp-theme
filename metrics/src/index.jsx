import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './index.css';

const store = configureStore();
render(
  <Provider store={store}>
    <div>hello</div>
  </Provider>,
  document.getElementById('root')
);
