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

const BlogifyDetails = () => {
  const imageUrls = [
    "https://i.ibb.co/mrwt2Lfn/1.png",
    "https://i.ibb.co/mCWXKRcF/2.png",
    "https://i.ibb.co/0jgRDFJ6/3.png",
    "https://i.ibb.co/pvQYcSRT/4.png",
    "https://i.ibb.co/NdRLzKj6/5.png",
  ];

  return (
    <section className="pt-16 pb-8 px-4 sm:px-8 md:px-16 bg-slate-950 text-white max-w-6xl mx-auto">
      <Link
        to={"/"}
        className="inline-flex items-center gap-2 text-orange-400 font-semibold mb-4 hover:underline"
      >
        <FaArrowLeft /> Go Back
      </Link>

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-orange-400 mb-4 inline-flex items-center gap-2 justify-center">
          <FaBlog /> Blogify — Write, Share, Connect
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          A full-featured, modern blog platform for content creators and
          developers, built with React, Firebase, MongoDB & TailwindCSS.
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
          <li>React 19, React Router v7, TailwindCSS 4.1</li>
          <li>Framer Motion, Lottie, TanStack Table</li>
          <li>Firebase Authentication + Google OAuth</li>
          <li>JWT for secure backend auth, MongoDB + Express.js</li>
          <li>React Markdown, Photo View, Typewriter, Toastify, Tooltip</li>
        </ul>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaFileAlt /> Description
        </h3>
        <p className="text-slate-300 leading-relaxed">
          Blogify is a responsive full-stack blog platform that allows users to
          publish, explore, and interact with blog content. It supports
          real-time CRUD operations, authentication with Firebase, secure
          JWT-based protected routes, and interactive UI features like animated
          transitions, comments, wishlists, and markdown rendering.
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
              href="https://assignment-11-client-32ff9.web.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              https://assignment-11-client-32ff9.web.app/
            </a>
          </li>
          <li>
            🗂️ GitHub Repository:{" "}
            <a
              href="https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-arafat22184"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-arafat22184
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
            Integrating Firebase Authentication with secure backend JWT flow.
          </li>
          <li>
            Building a performant UI for blog sorting, filtering, and search
            with MongoDB queries.
          </li>
          <li>
            Creating a seamless UX for comments, wishlist toggles, and feature
            detection.
          </li>
        </ul>
      </div>

      {/* Improvements */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
          <FaRocket /> Future Improvements & Plans
        </h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            Add markdown blog editor with WYSIWYG support for rich text
            formatting.
          </li>
          <li>Implement dark/light mode toggle.</li>
          <li>Build an admin panel for blog moderation and analytics.</li>
          <li>Add pagination or infinite scroll for blog listings.</li>
          <li>
            Improve SEO using meta tags and server-side rendering techniques.
          </li>
        </ul>
      </div>

      {/* Go Home Button */}
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

export default BlogifyDetails;
