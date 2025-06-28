import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router";
import {
  FaArrowLeft,
  FaBlog,
  FaTools,
  FaFileAlt,
  FaLink,
  FaExclamationTriangle,
  FaRocket,
  FaHome,
} from "react-icons/fa";
import { useEffect } from "react";

const HobbyHubDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrls = [
    "https://i.ibb.co/5WYKsBqx/HobbyHub.png",
    "https://i.ibb.co/hxR8cNgz/Hobby-Hub-All-Groups.png",
    "https://i.ibb.co/n8wHHJm9/Hobby-Hub-Dashboard.png",
    "https://i.ibb.co/jkLzfJnB/Hobby-Hub-Group-Details.png",
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
          <FaBlog /> HobbyHub — Local Hobby Group Organizer
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          A modern React-based platform to discover, create, and join hobby
          groups with smart authentication, responsive UI, and smooth
          animations.
        </p>

        {/* Images */}
        <PhotoProvider>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {imageUrls.map((src, i) => (
              <div key={i}>
                <PhotoView src={src}>
                  <img
                    src={src}
                    alt={`Preview ${i + 1}`}
                    className="rounded-xl shadow cursor-zoom-in w-full"
                  />
                </PhotoView>
              </div>
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
          <li>React 19, React Router v7, TailwindCSS 4, DaisyUI</li>
          <li>Firebase Authentication + Google Sign-In</li>
          <li>React Awesome Reveal, Lottie, CountUp</li>
          <li>React Tooltip, SweetAlert2, React Toastify</li>
          <li>Node.js + Express.js + MongoDB</li>
        </ul>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaFileAlt /> Description
        </h3>
        <p className="text-slate-300 leading-relaxed">
          HobbyHub connects people through shared interests by enabling users to
          explore and manage hobby-based groups. The platform supports user
          authentication, responsive layouts, dark/light mode, and seamless
          animations. It's designed to provide a smooth and interactive user
          experience for both organizers and participants.
        </p>
      </div>

      {/* Links */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaLink /> Project Links
        </h3>
        <ul className="text-orange-400 space-y-1">
          <li>
            🌐 Live Client:{" "}
            <a
              href="https://assignment-10-client-715c7.web.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              https://assignment-10-client-715c7.web.app/
            </a>
          </li>
          <li>
            🗂️ GitHub Repository:{" "}
            <a
              href="https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-arafat22184"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-arafat22184
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
          <li>
            Handling accurate date validation for group creation and updates.
          </li>
          <li>
            Integrating animations with performance-optimized conditional
            rendering.
          </li>
          <li>
            Managing real-time state and feedback using toast and modal systems.
          </li>
        </ul>
      </div>

      {/* Improvements */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaRocket /> Future Improvements & Plans
        </h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Introduce user profiles and group chat feature.</li>
          <li>Enable location-based hobby suggestions using geolocation.</li>
          <li>Add analytics dashboard for organizers.</li>
          <li>Enhance search/filter system using fuzzy matching.</li>
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

export default HobbyHubDetails;
