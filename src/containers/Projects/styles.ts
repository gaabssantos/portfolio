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

    @media (max-width: 1200px) {
      position: static;
    }
  }
  img#project-image {
    width: 500px;
    height: 300px;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    h1 {
      text-align: left;
    }

    img#project-image {
      width: 120%;
    }
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

  @media (max-width: 1200px) {
    width: 110%;
    margin-bottom: 1rem;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 1200px) {
    align-items: start;
  }
`;

export const ProjectStacks = styled.div<ProjectProps>`
  position: absolute;
  right: ${(props) => (props.reverse ? "88%" : "12%")};

  @media (max-width: 1200px) {
    right: 85%;
  }
`;

export const Button = styled.button`
  background: ${colors.secondary};
  border: 0;
  border: 1px solid #000;
  padding: 0.2rem;
  cursor: pointer;
  color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;

  a {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
