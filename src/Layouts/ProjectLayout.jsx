import { Link, Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const ProjectLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet></Outlet>
    </div>
  );
};

export default ProjectLayout;
