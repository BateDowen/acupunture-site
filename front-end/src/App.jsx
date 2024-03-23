import React, { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import { Outlet, RouterProvider, createBrowserRouter, useLocation, } from "react-router-dom";
import About from "./Pages/About";
import Prices from "./Pages/Prices";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Footer from "./components/Nav/Footer";
import Error from "./Pages/ErrorPage";
import Appointments from "./Pages/Appointments";
import AvailableHours from "./Pages/AvailableHours";
import BookHour from "./Pages/BookHour";
import { LoadingProvider } from "./components/Loader/LoadingCtx";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Blog from "./Pages/Blog";
import CreatePost from "./Pages/CreatePost";


const Layout = () => {
  const navigate = useLocation();

  useEffect(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    
  }, [navigate]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer /> 
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/appointments",
        element: <Appointments />,
      },
      {
        path: "/hours/:date",
        element: <AvailableHours />,
      },
      {
        path: "/hours/:date/:hourKey/:hour",
        element: <BookHour />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin/:date",
        element: <Admin />,
      },
      {
        path: "error",
        element: <Error />,
      },
    ],
  },
]);
const App = () => {
 
  return (
    <div>
      <div>
          <LoadingProvider>
            <RouterProvider router={router} >
            </RouterProvider>
          </LoadingProvider>
      </div>
    </div>
  );
};

export default App;
