import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// 1. Import AOS styles and library
import 'aos/dist/aos.css'
import AOS from 'aos'

function Root() {
  useEffect(() => {
    // 2. Initialize AOS
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true,    // whether animation should happen only once while scrolling down
      easing: 'ease-out-cubic'
    });
  }, [],);

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)