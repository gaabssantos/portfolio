import styled from "styled-components";

import { colors, fonts } from "../styles/themes";

export const Title = styled.h1`
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-size: 2.8125rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const SpecialText = styled.span`
  color: ${colors.specialText};
`;

export const Text = styled.p`
  color: #fff;
  font-family: ${fonts.primary};
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 0.44px;
`;
