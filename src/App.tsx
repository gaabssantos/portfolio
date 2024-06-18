import { SpecialText, Text, Title, Spacer } from "./components";
import Navbar from "./components/Navbar";
import Contact from "./containers/Contact";
import Introduction from "./containers/Introduction";
import Projects from "./containers/Projects";
import Stacks from "./containers/Stacks";
import WorkExperience from "./containers/WorkExperience";
import projects from "./scripts/projects";
import { Container } from "./styles";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Introduction />
        <Spacer size={4} responsive={"true"} />
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
        <Spacer size={5} />
        {projects.map((project, i) => {
          if (i % 2 === 0) {
            return (
              <Projects
                key={project.id}
                title={project.name}
                image={project.image}
                stacks={project.stacks}
              >
                {project.description}
              </Projects>
            );
          } else {
            return (
              <Projects
                key={project.id}
                title={project.name}
                image={project.image}
                stacks={project.stacks}
                reverse="true"
              >
                {project.description}
              </Projects>
            );
          }
        })}
        <Spacer size={5} />
        <Contact />
      </Container>
    </>
  );
}

export default App;
