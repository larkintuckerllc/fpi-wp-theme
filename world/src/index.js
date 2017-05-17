import './index.css';

const cute = require('./cute.jpg');

const rootEl = document.getElementById('root');
const imageEl = document.createElement('img');
imageEl.src = cute;
rootEl.appendChild(imageEl);
