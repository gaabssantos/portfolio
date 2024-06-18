import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

import { SpecialText, Text, Title } from "../../components";
import { colors } from "../../styles/themes";
import {
  Actions,
  Button,
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
  githubLink: string;
  deployLink: string;
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: `${colors.secondary}`,
  color: `${colors.white}`,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Projects = ({
  title,
  children,
  image,
  stacks,
  reverse,
  githubLink,
  deployLink,
}: ProjectsProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Text>Visite o projeto!</Text>
          <Actions>
            <a href={githubLink} target="_blank">
              <Button>
                <FaGithub /> Github
              </Button>
            </a>
            <a href={deployLink} target="_blank">
              <Button>
                <FaComputer /> Deploy
              </Button>
            </a>
          </Actions>
        </Box>
      </Modal>
      <Container reverse={reverse} onClick={handleOpen}>
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
    </>
  );
};

export default Projects;
