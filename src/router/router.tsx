import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Restuarant from "../pages/restuarantPage/Restuarant";

export const router = createBrowserRouter([
    {
       path: "/",
       element: <App />,
       errorElement: <ErrorPage />,
       children: [
          {
             path: "/",
             element: <Home />,
          },
          {
             path: "/restuarant/:restId",
             element: <Restuarant />,
          },
       ],
    },
 ]);