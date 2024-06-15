import Circle from "./assets/boy-circle.svg";
import Boy from "./assets/boy-computer.png";
import { SpecialText, Text, Title } from "./components";
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
      </Container>
    </div>
  );
}

export default App;
