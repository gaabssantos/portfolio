import Logo from "../../assets/logo.svg";
import { Container } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Experiência</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
    </Container>
  );
};

export default Navbar;
