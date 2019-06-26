import React from 'react';
import ReactDOM from 'react-dom';
import Home from './HomePage/App';
import Contact from './Contact/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Contact />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
