import React from 'react'
import Nav from './components/Nav'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Pages/About'
import Prices from './Pages/Prices'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'

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
