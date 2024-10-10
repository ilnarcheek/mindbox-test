import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #f5f5f5;
    --accent-color: #e9d9d8;
    --primary-color: #4d4d4d;
    --secondary-color: #dadada;
    --grey-color: #787878;
    --cb-uncheked-color: #efefef;
    --cb-checked-color: #ccdfdb;

    --fs-l: 10rem;
    --fs-m: 2.5rem;
    --fs-s: 1.5rem;
  }

  * {
    padding: 0px;
    margin: 0px;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: var(--fs-m);
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    color: var(--primary-color);
    font-weight: 300;
    background-color: var(--bg-color);
  }

  a, a:link, a:visited  {
      text-decoration: none;
  }

  a:hover  {
      text-decoration: none;
  }

  aside, nav, footer, header, section, main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
  }

  ul, ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  input, textarea, button, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    font-weight: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button, input[type="submit"] {
      display: inline-block;
      box-shadow: none;
      background-color: transparent;
      background: none;
      cursor: pointer;
  }

  input:focus, input:active,
  button:focus, button:active {
      outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }
`;
