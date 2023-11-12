import { useContext, useState } from "react";
import "./App.css";

<<<<<<< HEAD
import Navbar from "./components/Navbar";

import { ThemeContext } from "./context/ThemeContext";

import { Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import ModalTheme from "./components/ModalTheme";
=======
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ModalTheme from "./components/ModalTheme";

import { ThemeContext } from "./context/ThemeContext";

import AOS from "aos";
import "aos/dist/aos.css";
>>>>>>> 094ee08fd87c1d12db329d15bb0e69361df753c8
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

<<<<<<< HEAD
  if (openModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <Navbar setOpenModal={setOpenModal} />
      <ModalTheme isOpen={openModal} setOpen={setOpenModal} />
      <Outlet />
=======
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
>>>>>>> 094ee08fd87c1d12db329d15bb0e69361df753c8
    </div>
  );
}

export default App;
