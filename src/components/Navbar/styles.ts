import styled from "styled-components";

import { colors, fonts } from "../../styles/themes";

export const Container = styled.div`
  color: ${colors.white};
  background-color: ${colors.navbar};
  font-family: ${fonts.navbar};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  box-shadow: 0px 6px 22px -3px rgba(0, 0, 0, 0.1);

  img {
    width: 2.18rem;
  }

  ul {
    list-style-type: none;
  }

  ul li {
    display: inline-block;
    margin-right: 3rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 600px) {
    ul li {
      display: none;
    }
  }
`;
