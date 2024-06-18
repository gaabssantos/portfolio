import { ReactNode } from "react";

import { SpecialText, Title } from "../../components";
import { Container, ProjectDescription, ProjectStacks } from "./styles";

type ProjectsProps = {
  title: string;
  children: ReactNode;
  image: string;
  stacks: { id: number; image: string; name: string }[];
};

const Projects = ({ title, children, image, stacks }: ProjectsProps) => {
  return (
    <Container>
      <div>
        <SpecialText>Projeto em destaque</SpecialText>
        <Title>{title}</Title>
        <ProjectDescription>{children}</ProjectDescription>
      </div>
      <img src={image} alt="instagram-clone" id="project-image" />
      <ProjectStacks>
        {stacks.map((stack) => (
          <img key={stack.id} src={stack.image} alt={stack.name} />
        ))}
      </ProjectStacks>
    </Container>
  );
};

export default Projects;
