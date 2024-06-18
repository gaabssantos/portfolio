import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Spacer, Text, Title } from "../../components";
import { Container, SocialMedia } from "./styles";

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contato</Title>
      <Text>
        Atualmente, estou procurando entrar em uma equipe de desenvolvimento.
        Possuo uma ótima comunicação, resolução de problemas, lógica e trabalho
        em equipe. Vamos nos conectar? :D
      </Text>
      <Spacer size={2} />
      <Text>
        <a href="mailto:gabriel.oliveira2040@hotmail.com">
          gabriel.oliveira2040@hotmail.com
        </a>
      </Text>
      <Spacer size={2} />
      <SocialMedia>
        <button>
          <a href="https://github.com/gaabssantos" target="_blank">
            <FaGithub />
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/gaabssantos/" target="_blank">
            <FaLinkedin />
          </a>
        </button>
        <button>
          <a href="https://www.instagram.com/gaabssantos._/" target="_blank">
            <FaInstagram />
          </a>
        </button>
      </SocialMedia>
    </Container>
  );
};

export default Contact;
