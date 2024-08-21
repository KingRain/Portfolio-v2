import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Sidebar from './components/sidebar'
import MainContent from './components/MainContent'

const handleScroll = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }
};




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <MainContent handleScroll={handleScroll}/>
  </React.StrictMode>
);
