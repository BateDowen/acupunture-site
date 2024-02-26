import React from "react";
import Nav from "./components/Nav";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Prices from "./Pages/Prices";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Error from "./Pages/ErrorPage";
import Appointments from "./Pages/Appointments";
import AvailableHours from "./Pages/AvailableHours";
import BookHour from "./Pages/BookHour";
import { LoadingProvider } from "./components/Loader/LoadingCtx";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";

const Layout = () => {
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
          <RouterProvider router={router} />
        </LoadingProvider>
      </div>
    </div>
  );
};

export default App;
