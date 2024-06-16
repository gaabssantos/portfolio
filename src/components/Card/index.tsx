import { ReactNode } from "react";

import { Text } from "..";

import CircleGradient from "../CircleGradient";
import IconWork from "../IconWork";
import { Container, Title } from "./styles";

type CardProps = {
  title: string;
  children: ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <>
      <CircleGradient />
      <Container>
        <IconWork />
        <div>
          <Title>{title}</Title>
          <Text>{children}</Text>
        </div>
      </Container>
    </>
  );
};

export default Card;
