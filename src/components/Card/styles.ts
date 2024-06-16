import styled from "styled-components";

import { colors, fonts } from "../../styles/themes";

export const Container = styled.div`
  border-radius: 15px;
  background: linear-gradient(
    110deg,
    #130428 19.95%,
    #251043 67.64%,
    #38126d 107.08%,
    #261045 156.61%,
    #190634 183.21%
  );
  box-shadow: 4px 7px 26px 0px rgba(0, 0, 0, 0.12);
  width: 80%;
  margin-top: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  border-top: 3px solid ${colors.borderColor};
  gap: 20px;
  margin: 1.25rem auto;

  p {
    font-size: 0.625rem;
    width: 80%;
  }

  svg {
    width: 83rem;
  }
`;

export const Title = styled.h1`
  font-family: ${fonts.secondary};
  color: ${colors.white};
  font-weight: normal;
`;
