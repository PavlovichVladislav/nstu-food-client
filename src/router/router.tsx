import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Main from "../pages/main/Main";
import Restuarant from "../pages/restuarantPage/Restuarant";

export const Router = createBrowserRouter([
    {
       path: "/",
       element: <App />,
       errorElement: <ErrorPage />,
       children: [
          {
             path: "/",
             element: <Main />,
          },
          {
             path: "/restuarant/:restId",
             element: <Restuarant />,
          },
       ],
    },
 ]);