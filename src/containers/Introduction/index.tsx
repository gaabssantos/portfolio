import Circle from "../../assets/boy-circle.svg";
import Boy from "../../assets/boy-computer.png";
import { SpecialText, Text, Title } from "../../components";
import Arrow from "../../components/Arrow";
import { BoyImage, CircleImage, IntroductionContainer } from "./styles";

const Introduction = () => {
  return (
    <>
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
    </>
  );
};

export default Introduction;
