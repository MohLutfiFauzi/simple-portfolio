import React from "react";
import { createRoot } from "react-dom/client";
import Template from "@/components/Template";
import Landing from "./pages/Landing.jsx";
import Experience from "./pages/Experience.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Awards from "./pages/Awards.jsx";
import Interest from "./pages/Interest.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "awards",
        element: <Awards />,
      },
      {
        path: "interest",
        element: <Interest />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
