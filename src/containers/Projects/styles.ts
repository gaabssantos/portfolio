import styled from "styled-components";

import { colors, fonts } from "../../styles/themes";

type ProjectProps = {
  reverse?: string;
};

export const Container = styled.section<ProjectProps>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  font-family: ${fonts.secondary};
  margin-bottom: 2.5rem;
  cursor: pointer;
  margin-top: 5rem;

  img {
    position: relative;
    right: ${(props) => (props.reverse ? "-5%" : "10%")};
    z-index: -1;
  }
  img#project-image {
    width: 500px;
    height: 300px;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const ProjectDescription = styled.div`
  border-radius: 14px;
  background: radial-gradient(
    151.92% 127.02% at 15.32% 21.04%,
    rgba(105, 59, 147, 0.2) 0%,
    rgba(110, 191, 244, 0.04) 77.08%,
    rgba(70, 144, 212, 0) 100%
  );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(40px);
  width: 32rem;
  padding: 2rem;
  color: ${colors.white};
`;

export const ProjectHeader = styled.div<ProjectProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProjectStacks = styled.div<ProjectProps>`
  position: absolute;
  right: ${(props) => (props.reverse ? "88%" : "12%")};
`;
