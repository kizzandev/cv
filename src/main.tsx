import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root.tsx";
import App from "./App.tsx";
import Mvv from "./pages/Mvv.tsx";

import "./index.css";
import ErrorPage from "./pages/Error.tsx";

const router = createBrowserRouter(
  [
    {
      path: ":lang?/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: ":lang?/mv",
      element: <Mvv />,
    },
  ],
  {}
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root>
      <RouterProvider router={router} />
    </Root>
  </React.StrictMode>
);
