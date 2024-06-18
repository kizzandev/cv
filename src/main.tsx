import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Mvv from "./pages/Mvv.tsx";

import "./index.css";
import ErrorPage from "./pages/Error.tsx";
import Ohno from "./pages/Ohno.tsx";
import Index from "./pages/Index.tsx";
import Projects from "./pages/Projects.tsx";

const router = createBrowserRouter(
  [
    {
      path: ":lang?/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Index />,
        },
        {
          path: "mv",
          element: <Mvv />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
      ],
    },
    {
      path: ":lang?/451",
      element: <Ohno />,
    },
    {
      path: "*",
      element: <ErrorPage />,
      errorElement: <ErrorPage />,
    },
  ],
  {}
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
