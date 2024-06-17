import styled from "styled-components";

import { colors, fonts } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  font-family: ${fonts.secondary};
  margin-bottom: 2.5rem;

  img {
    position: relative;
    right: 10%;
    z-index: -1;
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

export const ProjectStacks = styled.div`
  position: relative;
  right: 15%;
`;
