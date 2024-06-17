import { ReactNode } from "react";

import { Container } from "./styles";

type CircleStacks = {
  children: ReactNode;
};

const CircleStacks = ({ children }: CircleStacks) => {
  return <Container>{children}</Container>;
};

export default CircleStacks;
