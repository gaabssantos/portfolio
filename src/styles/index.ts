import styled from "styled-components";

export const Container = styled.div`
  width: 65%;
  margin: 5rem auto;

  @media (max-width: 800px) {
    margin-top: 0;

    h1,
    p {
      text-align: center;
    }
  }
`;
