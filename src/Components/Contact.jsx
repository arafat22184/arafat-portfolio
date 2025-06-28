import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { toast } from "react-toastify";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.error(
      `Sorry ${e.target.name.value} Form not active yet. Please contact via email or phone.`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 md:px-16 bg-slate-950 text-white max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="flex justify-center items-center gap-3 text-orange-400 text-4xl font-bold">
          <MdContactMail className="text-5xl" />
          <h2>Contact Me</h2>
        </div>
        <p className="text-slate-400 text-lg mt-2">
          Feel free to reach out through any method or drop a message below.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left - Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Location */}
          <div className="border border-slate-700 bg-slate-900/70 p-5 rounded-2xl shadow-md space-y-2 flex flex-col justify-center items-center">
            <FaMapMarkerAlt className="text-2xl text-orange-400" />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-slate-400 italic text-center">
              Mirpur-2, Dhaka, Bangladesh
            </p>
          </div>

          {/* Available Time */}
          <div className="border border-slate-700 bg-slate-900/70 p-5 rounded-2xl shadow-md space-y-2 flex flex-col justify-center items-center">
            <FaClock className="text-2xl text-orange-400" />
            <h3 className="text-lg font-semibold">Available Time</h3>
            <p className="text-slate-400 italic">
              Monday - Friday <br /> 9:00am - 5:00pm
            </p>
          </div>

          {/* Phone */}
          <div className="border border-slate-700 bg-slate-900/70 p-5 rounded-2xl shadow-md space-y-2 flex flex-col justify-center items-center">
            <FaPhone className="text-2xl text-orange-400" />
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-slate-400 italic">+8801747144726</p>
          </div>

          {/* Email */}
          <div className="border border-slate-700 bg-slate-900/70 p-5 rounded-2xl shadow-md space-y-2 flex flex-col justify-center items-center">
            <FaEnvelope className="text-2xl text-orange-400" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-slate-400 italic">123alarafat@gmail.com</p>
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleFormSubmit}
          className="space-y-6 bg-slate-900/70 border border-slate-700 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Stay in Touch
          </h3>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <textarea
              rows="4"
              required
              placeholder="Message"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 text-slate-900 font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
