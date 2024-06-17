import styled from "styled-components";

export const CircleImage = styled.img`
  position: absolute;
  width: 20rem;
  pointer-events: none;

  @media (max-width: 800px) {
    bottom: 15%;
  }
`;

export const BoyImage = styled.img`
  width: 18rem;
  pointer-events: none;
  position: relative;
  left: 1rem;
`;

export const IntroductionContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 27%;

  p {
    margin-left: 10rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
