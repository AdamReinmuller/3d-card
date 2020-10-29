import { styled } from "linaria/react";

export const GlobalStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap");
  :global() {
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
  }
`;
