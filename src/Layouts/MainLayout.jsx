import About from "../Components/About";
import Header from "../Components/Header";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default MainLayout;
