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

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
