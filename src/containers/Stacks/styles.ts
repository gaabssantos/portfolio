import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StacksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 50%;
  margin-top: 2rem;

  img {
    pointer-events: none;
  }
`;
