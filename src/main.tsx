import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import LogIn from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <LogIn />
  </Provider>
)
