import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyle = css`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #202124;
    line-height: 1.4;
    font-family: Noto Sans, Noto Sans KR;
    color: #fefefe;

    textarea {
      resize: none;
    }

    hr {
      margin: 0;
      border: solid 0.5px #fefefe;
      opacity: 20%;
    }
  }

  button {
    text-decoration: none;
    border: 0;
    cursor: pointer;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
