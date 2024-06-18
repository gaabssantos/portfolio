import { SpecialText, Text } from "../../components";
import CircleStacks from "../../components/CircleStacks";
import stacks from "../../scripts/stacks";
import { Container, StacksContainer } from "./styles";

const Stacks = () => {
  return (
    <Container id="stacks">
      <Text>
        Eu, atualmente, estou procurando entrar em uma{" "}
        <SpecialText>equipe de desenvolvimento</SpecialText>, de acordo com
        minhas tecnologias:
      </Text>
      <StacksContainer>
        {stacks.map((stack) => (
          <CircleStacks key={stack.id}>
            <img src={stack.icon} alt={stack.name} />
          </CircleStacks>
        ))}
      </StacksContainer>
    </Container>
  );
};

export default Stacks;
