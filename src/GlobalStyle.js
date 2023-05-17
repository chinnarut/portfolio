import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    scroll-behavior: smooth;
  }

  body {
    background-color: #1E1E1E;
    font-family: "Inter", sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ff4c60;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #222121;
    }
  }

  a, button, input {
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  #tsparticles {
    height: 100vh;
  }

  .center-title {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
`;