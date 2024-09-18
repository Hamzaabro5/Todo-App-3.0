import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Notfound from './Pages/Notfound.jsx'

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Layout />,
    children: [
      {
      path: ``,
      element: <Home />
      },
      {
      path: `Login`,
      element: <Login />
      },
      {
      path: `Register`,
      element: <Register />
      },
      {
      path: `*`,
      element: <Notfound />
      },
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
