import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Sidebar from './components/sidebar'
import MainContent from './components/MainContent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <MainContent />
  </React.StrictMode>,
)
