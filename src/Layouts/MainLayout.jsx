import { ToastContainer } from "react-toastify";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default MainLayout;
