import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

const store = configureStore();
window.store = store;
window.dispatch = store.dispatch; // just for testing!

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to My Blog</h1>, root);
});