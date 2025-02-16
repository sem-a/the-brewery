import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import App from "./App";
import { PATHS } from "./paths";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import Brewery from "./pages/brewery";
import Edit from "./pages/edit";

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <App />,
  },
  {
    path: `${PATHS.brewery}/:id`,
    element: <Brewery />,
  },
  {
    path: `${PATHS.edit}/:id`,
    element: <Edit />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
