import React from 'react'
import Nav from './components/Nav'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Pages/About'
import Prices from './Pages/Prices'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Error from './Pages/Error'


const Layout =() => {
    return (
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
    )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
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
          {
            path: 'error',
            element: <Error />
          }
      ]
  },
])
const App = () => {
  return (
    <div>
      <div >
      <RouterProvider router={router}/>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
