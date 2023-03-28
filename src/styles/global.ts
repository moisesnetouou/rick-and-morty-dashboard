import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    // Max Width
    --max-width-super-desktop: 1420px;
    --max-width-desktop: 1120px;
    --max-width-tablet: 900px;
    --max-width-mobile: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
 
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
