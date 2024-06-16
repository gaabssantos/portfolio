import styled from "styled-components";

export const Svg = styled.svg`
  position: absolute;
  z-index: -1;
  bottom: -145%;
  left: 26%;

  @media (max-width: 600px) {
    display: none;
  }
`;
