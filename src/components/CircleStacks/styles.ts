import styled from "styled-components";

import { colors } from "../../styles/themes";

export const Container = styled.div`
  background-color: ${colors.circleColor};
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 3.125rem;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1.875rem;
  }
`;
