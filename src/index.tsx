import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from "./router/Router";

const root = createRoot(document.getElementById("root")!);
root.render(
   <Provider store={store}>
      <RouterProvider router={Router} />
   </Provider>
);
