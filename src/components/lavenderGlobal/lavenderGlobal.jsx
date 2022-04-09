import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --lavender: #BF94E4;
    --lavender-dark: ##301249;
    --lavender-light: #E7D6F5;
    --pink:#FBAED2;
    --pink-dark: #920748;
    --pink-light: #FDCEE4;  
    --red: #F8665E;
    --red-dark: #930D06;
    --red-light: #FA8B85;
    --almost-black; #1B1B1B;
  }
  * {
  box-sizing: border-box;
  }
  html {font-size: calc(1em + 1vw);}
`;

export default GlobalStyle;