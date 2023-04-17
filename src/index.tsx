import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { router } from "./router/router";

const root = createRoot(document.getElementById("root")!);
root.render(
   <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
);
