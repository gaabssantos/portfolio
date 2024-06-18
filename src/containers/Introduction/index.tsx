import Circle from "../../assets/introduction-section/boy-circle.svg";
import Boy from "../../assets/introduction-section/boy-computer.png";
import { SpecialText, Text, Title } from "../../components";
import Arrow from "../../components/Arrow";
import {
  BoyImage,
  CircleImage,
  Container,
  IntroductionContainer,
} from "./styles";

const Introduction = () => {
  return (
    <Container id="introduction">
      <CircleImage src={Circle} alt="circulo" />
      <IntroductionContainer>
        <Arrow />
        <Text>
          Olá! Eu sou o <SpecialText>Gabriel Santos</SpecialText>
        </Text>
      </IntroductionContainer>
      <BoyImage src={Boy} alt="circulo" />
      <div>
        <Title>
          A palavra "impossível" foi criada para ser{" "}
          <SpecialText>desafiada</SpecialText>.
        </Title>
      </div>
    </Container>
  );
};

export default Introduction;
