import { useContext } from "react";
import "./Navbar.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

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
        {theme === "dark" ? (
          <BsFillSunFill color="#fff" onClick={() => setTheme("light")} />
        ) : (
          <BsFillMoonFill color="#151f42" onClick={() => setTheme("dark")} />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
