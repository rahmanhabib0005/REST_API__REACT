import React from 'react'
import ReactDOM from 'react-dom/client'
import { Store } from './Component/Store.jsx'
import App from './App.jsx'
import { Api } from './Component/Api.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Show } from './Component/Show.jsx'
import { Delete } from './Component/Delete.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Api />}>
        </Route>
          <Route path="/store" element={<Store />} />
          <Route path="/edit/:id/client" element={<Show />} />
          <Route path="/delete/:id/client" element={< Delete />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
