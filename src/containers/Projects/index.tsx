import { ReactNode } from "react";

import projectImage from "../../assets/projects/project-image.svg";
import css3 from "../../assets/stacks-icon/css3.svg";
import html5 from "../../assets/stacks-icon/html5.svg";
import { SpecialText, Title } from "../../components";
import { Container, ProjectDescription, ProjectStacks } from "./styles";

type ProjectsProps = {
  title: string;
  children: ReactNode;
};

const Projects = ({ title, children }: ProjectsProps) => {
  return (
    <Container>
      <div>
        <SpecialText>Projeto em destaque</SpecialText>
        <Title>{title}</Title>
        <ProjectDescription>{children}</ProjectDescription>
      </div>
      <img src={projectImage} alt="instagram-clone" />
      <ProjectStacks>
        <img src={html5} alt="html5" />
        <img src={css3} alt="html5" />
      </ProjectStacks>
    </Container>
  );
};

export default Projects;
