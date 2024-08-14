import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import './index.css'
import 'antd/dist/reset.css'
import store from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          <Provider store={store}>
            <App />
          </Provider>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
)
