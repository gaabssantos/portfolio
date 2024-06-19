import styled from "styled-components";

import { colors } from "../../styles/themes";

export const Container = styled.section`
  a {
    color: ${colors.white};
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background: transparent;
    border: 0;
  }

  svg {
    font-size: 1.5rem;
    color: ${colors.white};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;
