import { useState } from "react";
import "./Navbar.css";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <nav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="#about-me">Sobre mim</a>
        </li>
        <li>
          <a href="#">Habilidades</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        {theme === "dark" ? <BsFillSunFill /> : ""}
      </ul>
    </nav>
  );
};

export default Navbar;
