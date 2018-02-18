
//utils
import React from 'react';
import ReactDOM from 'react-dom';

//testing
import configureStore from './store/store';

//components
import Root from './components/main/root';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //render components
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});