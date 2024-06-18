import { ReactNode } from "react";

import { SpecialText, Title } from "../../components";
import {
  Container,
  ProjectDescription,
  ProjectHeader,
  ProjectStacks,
} from "./styles";

type ProjectsProps = {
  title: string;
  children: ReactNode;
  image: string;
  stacks: { id: number; image: string; name: string }[];
  reverse?: string;
};

const Projects = ({
  title,
  children,
  image,
  stacks,
  reverse,
}: ProjectsProps) => {
  return (
    <Container reverse={reverse}>
      <div>
        {reverse ? (
          <ProjectHeader>
            <SpecialText>Projeto em destaque</SpecialText>
            <Title>{title}</Title>
          </ProjectHeader>
        ) : (
          <>
            <SpecialText>Projeto em destaque</SpecialText>
            <Title>{title}</Title>
          </>
        )}
        <ProjectDescription>{children}</ProjectDescription>
      </div>
      <img src={image} alt="imagem-do-projeto" id="project-image" />
      <ProjectStacks reverse={reverse}>
        {stacks.map((stack) => (
          <img key={stack.id} src={stack.image} alt={stack.name} />
        ))}
      </ProjectStacks>
    </Container>
  );
};

export default Projects;
