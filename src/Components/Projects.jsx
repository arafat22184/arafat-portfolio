import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "Blogify",
    image: "https://i.ibb.co/p6r2Dnrx/Blogify.png",
  },
  {
    id: 2,
    name: "HobbyHub",
    image: "https://i.ibb.co/5WYKsBqx/HobbyHub.png",
  },
  {
    id: 3,
    name: "Job-Finder",
    image: "https://i.ibb.co/pvKfW2mQ/Job-Finder.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-8 md:px-16 bg-slate-950 text-white max-w-7xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-orange-400">
          My Projects
        </h2>
        <p className="text-slate-400 mt-2 text-base md:text-lg max-w-2xl mx-auto">
          Explore some of my best work showcasing different technologies and
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-800 hover:shadow-orange-400/20 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-orange-400">
                {project.name}
              </h3>
              <Link
                to={`/project/${project.id}`}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
