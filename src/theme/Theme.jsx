import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import EuclidRegular from "../fonts/EuclidCircularA-Regular.woff";
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Euclid";
  src: url(${EuclidRegular}) format('woff');
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color:#000;
    font-size: 16px;
    line-height: 1.45;
    font-family: 'Euclid', sans-serif;
    font-weight: 400;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  
`;
const Theme = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Theme;
