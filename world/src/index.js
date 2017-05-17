// @flow
import 'babel-polyfill';
import './index.css';

const cute = require('./cute.jpg');

const rootEl = document.getElementById('root');
const imageEl = document.createElement('img');
imageEl.src = cute;
// $FlowFixMe
rootEl.appendChild(imageEl);
const stuff = {
  a: 'apple',
  b: 'banana',
};
const newStuff = {
  ...stuff,
  c: 'change',
};
window.console.log(newStuff);
