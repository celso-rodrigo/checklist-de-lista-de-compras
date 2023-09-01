import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ItemListProvider from './context/ItemListProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ItemListProvider>
      <App />
    </ItemListProvider>
  </React.StrictMode>
)
