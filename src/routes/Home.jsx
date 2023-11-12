import "./Home.css";

import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {

  return (
    <div className="container">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
