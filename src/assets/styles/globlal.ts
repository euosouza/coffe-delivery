import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    line-height: 1.2
  }

  body {
    overflow-x: hidden;
  }
`;
