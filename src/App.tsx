import { SpecialText, Text, Title, Spacer } from "./components";
import Navbar from "./components/Navbar";
import Introduction from "./containers/Introduction";
import Stacks from "./containers/Stacks";
import WorkExperience from "./containers/WorkExperience";
import { Container } from "./styles";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Introduction />
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
        <Spacer size={5} />
        <WorkExperience />
        <Spacer size={6} />
        <Stacks />
      </Container>
    </div>
  );
}

export default App;
