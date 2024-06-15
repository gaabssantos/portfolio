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

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Introduction = styled.div`
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
