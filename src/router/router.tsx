import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Main from "../pages/main/Main";
import Restuarant from "../pages/restuarantPage/Restuarant";
import Spinner from "../components/spinner/Spinner";

const ErrorPage = lazy(() => import("../pages/errorPage/ErrorPage"));

export const Router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Main />,
         },
         {
            path: "/restuarant/:restId",
            element: <Restuarant />,
         },
         {
            path: "*",
            element: (
               <Suspense fallback={<Spinner/>}>
                  <ErrorPage />
               </Suspense>
            ),
         },
      ],
   },
]);
