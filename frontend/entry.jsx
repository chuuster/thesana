import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    const root = document.getElementById("root");
    store = configureStore();
  }
    
  ReactDOM.render(<Root store={store}/>, root); 
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
