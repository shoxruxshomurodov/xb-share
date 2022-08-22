import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import EuclidRegular from "../fonts/EuclidCircularA-Regular.woff";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScreenClassProvider } from "react-grid-system";
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
  .flex{
    display: flex;
  }
  .flex-column{
    flex-direction: column;
  }
  .items-center{
    align-items: center;
  }
  .justify-between{
    justify-content: space-between;
  }
  .h-100{
    height: 100%;
  }
`;
const Theme = ({ children }) => {
  return (
    <>
      <ScreenClassProvider>
        <GlobalStyle />
        {children}
      </ScreenClassProvider>
    </>
  );
};

export default Theme;
