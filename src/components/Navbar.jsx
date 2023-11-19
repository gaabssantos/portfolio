import { useContext } from "react";
import "./Navbar.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = ({ setOpenModal }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>
            <a href="#">Home</a>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <a href="#about-me">Sobre mim</a>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <a href="#skills">Habilidades</a>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <a href="#projects">Projetos</a>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <a href="#contact">Contato</a>
          </Link>
        </li>
        {theme === "dark" ? (
          <BsFillSunFill color="#fff" onClick={() => setOpenModal(true)} />
        ) : (
          <BsFillMoonFill color="#151f42" onClick={() => setTheme("dark")} />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
