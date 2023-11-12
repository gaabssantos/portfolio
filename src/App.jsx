import { useContext, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

import { ThemeContext } from "./context/ThemeContext";

import { Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import ModalTheme from "./components/ModalTheme";
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
    </div>
  );
}

export default App;
