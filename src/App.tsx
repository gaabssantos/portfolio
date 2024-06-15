import Circle from "./assets/boy-circle.svg";
import Boy from "./assets/boy-computer.png";
import { SpecialText, Text, Title, Spacer } from "./components";
import Arrow from "./components/Arrow";
import Navbar from "./components/Navbar";
import { BoyImage, CircleImage, Container, Introduction, Main } from "./styles";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Main>
          <CircleImage src={Circle} alt="circulo" />
          <Introduction>
            <Arrow />
            <Text>
              Olá! Eu sou o <SpecialText>Gabriel Santos</SpecialText>
            </Text>
          </Introduction>
          <BoyImage src={Boy} alt="circulo" />
          <div>
            <Title>
              A palavra "impossível" foi criada para ser{" "}
              <SpecialText>desafiada</SpecialText>.
            </Title>
          </div>
        </Main>
        <Spacer size={4} responsive />
        <Title>Eu sou um Desenvolvedor Front-end.</Title>
        <Text>
          Atualmente, eu sou um desenvolvedor front-end{" "}
          <SpecialText>freelancer</SpecialText>.
        </Text>
        <Spacer size={4.375} />
        <Text>
          Um desenvolvedor front-end com paixão de criar projetos inovadores e
          aprender novas tecnologias e utilizar. Comecei na área em 2019, quando
          realizei o ensino médio técnico no curso de informática.
        </Text>
      </Container>
    </div>
  );
}

export default App;
