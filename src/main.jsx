import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProjectLayout from "./Layouts/ProjectLayout";
import Project3 from "./Components/Projects/Project3";
import BlogifyDetails from "./Components/Projects/BlogifyDetails";
import HobbyHubDetails from "./Components/Projects/HobbyHubDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
  {
    path: "/project",
    Component: ProjectLayout,
    children: [
      {
        path: "/project/1",
        Component: BlogifyDetails,
      },
      {
        path: "/project/2",
        Component: HobbyHubDetails,
      },
      {
        path: "/project/3",
        Component: Project3,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
