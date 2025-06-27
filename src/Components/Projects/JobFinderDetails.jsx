import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router";
import {
  FaArrowLeft,
  FaBriefcase,
  FaTools,
  FaFileAlt,
  FaLink,
  FaExclamationTriangle,
  FaRocket,
  FaHome,
} from "react-icons/fa";

const JobFinderDetails = () => {
  const imageUrls = [
    "https://i.ibb.co/pvKfW2mQ/Job-Finder.png",
    "https://i.ibb.co/v4hjS9XB/Job-Finder-Alljobs.png",
    "https://i.ibb.co/53Rp7ZG/jobfinder-Success.png",
  ];

  return (
    <section className="pt-16 pb-8 px-4 sm:px-8 md:px-16 bg-slate-950 text-white max-w-6xl mx-auto">
      <Link
        to={"/"}
        className="inline-flex items-center gap-2 text-orange-400 font-semibold mb-4 hover:underline"
      >
        <FaArrowLeft /> Go Back
      </Link>

      {/* Title & Preview */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-orange-400 mb-4 inline-flex items-center gap-2 justify-center">
          <FaBriefcase /> Job Finder — Winter-Themed Job Portal
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          A responsive single-page application that lets users explore jobs from
          various companies, with a sleek UI, authentication, and smooth
          animations.
        </p>

        <PhotoProvider>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {imageUrls.map((src, i) => (
              <PhotoView key={i} src={src}>
                <img
                  src={src}
                  alt={`JobFinder Preview ${i + 1}`}
                  className="rounded-xl shadow cursor-zoom-in w-full"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaTools /> Main Technology Stack
        </h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>React, React Router</li>
          <li>TailwindCSS, DaisyUI</li>
          <li>Firebase Authentication + Hosting</li>
          <li>Framer Motion, SweetAlert, Toastify, CountUp</li>
          <li>React Icons, React Helmet Async</li>
        </ul>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaFileAlt /> Description
        </h3>
        <p className="text-slate-300 leading-relaxed">
          Job Finder is a modern, mobile-friendly job portal built using React.
          It allows users to browse companies and available jobs, view detailed
          job info, and apply directly from modals. Featuring smooth
          authentication, profile management, animations, and winter-themed UI,
          this app is ideal for job seekers and hiring companies alike.
        </p>
      </div>

      {/* Live Links */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaLink /> Project Links
        </h3>
        <ul className="text-orange-400 space-y-1">
          <li>
            🌐 Live Client:{" "}
            <a
              href="https://job-finder-891d0.web.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              https://job-finder-891d0.web.app/
            </a>
          </li>

          <li>
            🗂️ GitHub Repository:{" "}
            <a
              href="https://github.com/programming-hero-web-course1/b11a9-react-authentication-arafat22184"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              https://github.com/programming-hero-web-course1/b11a9-react-authentication-arafat22184
            </a>
          </li>
        </ul>
      </div>

      {/* Challenges */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaExclamationTriangle /> Challenges Faced
        </h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Handling modal-based job application system with seamless UX.</li>
          <li>
            Building a fully winter-themed responsive layout with route
            protection.
          </li>
          <li>
            Implementing context-based auth and route-level guards for profile
            and company views.
          </li>
        </ul>
      </div>

      {/* Future Plans */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaRocket /> Future Improvements & Plans
        </h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Integrate real-time job posting feature with backend DB.</li>
          <li>Add filter & sort system for job search experience.</li>
          <li>Enable resume upload and admin dashboard for companies.</li>
          <li>Add lazy loading and improve SEO support.</li>
        </ul>
      </div>

      {/* Home Button */}
      <div className="flex justify-center mt-12">
        <Link
          to={"/"}
          className="w-44 flex items-center justify-center gap-2 font-semibold py-3 rounded-2xl bg-orange-400 hover:bg-orange-500 transition"
        >
          <FaHome /> Home
        </Link>
      </div>
    </section>
  );
};

export default JobFinderDetails;
