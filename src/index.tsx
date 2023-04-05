import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Home from "./pages/home/Home";
import Restuarant from "./pages/restuarantPage/Restuarant";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/restuarant",
          element: <Restuarant />,
        }
      ],
   },
]);

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router}/>);
