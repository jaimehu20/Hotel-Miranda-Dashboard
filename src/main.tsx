import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import LogIn from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <LogIn />
    </Provider>
  );
} else {
  console.error("Error");
}

