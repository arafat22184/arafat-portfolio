import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProjectLayout from "./Layouts/ProjectLayout";
import BlogifyDetails from "./Components/Projects/BlogifyDetails";
import HobbyHubDetails from "./Components/Projects/HobbyHubDetails";
import JobFinderDetails from "./Components/Projects/JobFinderDetails";

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
        Component: JobFinderDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
