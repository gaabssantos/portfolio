import Logo from "../../assets/logo.svg";
import Menu from "../Menu";
import { Container } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#works">Experiência</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <Menu />
    </Container>
  );
};

export default Navbar;
