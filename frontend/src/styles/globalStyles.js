import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        border: 0;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        text-align:center;
    }

    body {
        background-color: #202124;
    }

    .App {
        text-align: center;
    }

    h4 {
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      letter-spacing: -0.5px;
    }

    h6 {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
    }
`;

export default GlobalStyle;
