import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import Rates from './routes/Rates.jsx'
import Contact from './routes/Contact.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />, 
    children: [
      { path: '/', element: <Home />},
      { path: '/rates', element: <Rates />},
      { path: '/contact', element: <Contact />}
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
