import React from 'react'
import Nav from './components/Nav'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/Pages/About'
import Prices from './components/Pages/Prices'
import Contacts from './components/Pages/Contacts'
import Home from './components/Pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav/>,
    children:[
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/prices',
            element: <Prices />
          },
          {
            path: '/contacts',
            element: <Contacts />
          },
      ]
  },
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
