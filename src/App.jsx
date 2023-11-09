import { useContext, useState } from "react";
import "./App.css";

import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ModalTheme from "./components/ModalTheme";

import { ThemeContext } from "./context/ThemeContext";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const { theme } = useContext(ThemeContext);
  const [openModal, setOpenModal] = useState(false);

  if (theme === "light") {
    document.body.style.backgroundColor = "#fff";
    document.querySelectorAll(["h1", "nav a"]).forEach((item) => {
      item.style.color = "#151f42";
    });
  } else {
    document.body.style.backgroundColor = "#151f42";
    document.querySelectorAll(["h1", "nav a"]).forEach((item) => {
      item.style.color = "#fff";
    });
  }

  return (
    <div>
      <Navbar setOpenModal={setOpenModal} />
        <div className="container">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <ModalTheme isOpen={openModal} setOpen={setOpenModal} />
    </div>
  );
}

export default App;
