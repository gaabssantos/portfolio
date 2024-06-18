import { createGlobalStyle } from "styled-components";

import { colors, fonts } from "./themes";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${fonts.primary};
    }

    body {
        background-color: ${colors.primary};
    }

    a {
        text-decoration: none;
        color: ${colors.white};
    }
`;
