import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'
import './assets/css/plugins/flaticon.css';
import './assets/css/plugins/swiper.min.css';
import './assets/css/plugins/jquery.fancybox.css'
import { RouterProvider } from 'react-router'
import { router } from './utils/router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
