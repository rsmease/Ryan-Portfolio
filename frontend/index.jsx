//utils
import React from 'react';
import ReactDOM from 'react-dom';

//testing
import configureStore from './store/store';

//components
import Root from './components/main/root';

const store = configureStore();
window.store = store;
window.dispatch = store.dispatch; // just for testing!

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});