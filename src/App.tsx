import { SpecialText, Text, Title, Spacer } from "./components";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
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
        <Reveal>
          <Introduction />
        </Reveal>
        <Spacer size={4} responsive={"true"} />
        <Reveal>
          <Title>Eu sou um Desenvolvedor Front-end.</Title>
          <Text>
            Atualmente, eu sou um desenvolvedor front-end{" "}
            <SpecialText>freelancer</SpecialText>.
          </Text>
        </Reveal>
        <Spacer size={4.375} />
        <Reveal>
          <Text>
            Um desenvolvedor front-end com paixão de criar projetos inovadores e
            aprender novas tecnologias e utilizar. Comecei na área em 2019,
            quando realizei o ensino médio técnico no curso de informática.
          </Text>
        </Reveal>
        <Spacer size={5} />
        <Reveal>
          <WorkExperience />
        </Reveal>
        <Spacer size={6} />
        <Reveal>
          <Stacks />
        </Reveal>
        <Spacer size={5} />
        <Reveal>
          {projects.map((project, i) => {
            if (i % 2 === 0) {
              return (
                <Projects
                  key={project.id}
                  title={project.name}
                  image={project.image}
                  stacks={project.stacks}
                  githubLink={project.githubLink}
                  deployLink={project.deployLink && project.deployLink}
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
                  githubLink={project.githubLink}
                  deployLink={project.deployLink && project.deployLink}
                  reverse="true"
                >
                  {project.description}
                </Projects>
              );
            }
          })}
        </Reveal>
        <Spacer size={5} />
        <Reveal>
          <Contact />
        </Reveal>
      </Container>
    </>
  );
}

export default App;
