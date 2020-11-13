import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
    }
`;
