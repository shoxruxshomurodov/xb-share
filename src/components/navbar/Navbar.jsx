import React from "react";
import { Col, Hidden, Row } from "react-grid-system";
import styled from "styled-components";
import Language from "../lang";
import SearchInput from "../search";
import LogoImage from "../../assets/images/logo.svg";

const Styled = styled.header`
  .logo {
    display: flex;
    align-items: center;

    &_title {
      margin-left: 5px;
      font-size: 30px;
      color: #041e42;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 1280px) {
    .logo {
      &_image {
        width: 30px;
      }
      &_title {
        font-size: 20px;
        color: #041e42;
        font-weight: 700;
      }
    }
  }
`;
const Navbar = () => {
  return (
    <Styled>
      <Row justify="between" align="center" className="header_main">
        <Col
          justify="end"
          align="start"
          xxl={1}
          xl={2}
          lg={3}
          md={2}
          sm={6}
          xs={6}
          className="logo"
        >
          <img src={LogoImage} className="logo_image" />
          <h2 className="logo_title">ShareXalq</h2>
        </Col>
        <Hidden sm xs>
          <Col
            xxl={8}
            xl={7}
            lg={6}
            md={7}
            sm={5}
            style={{
              padding: "0px",
            }}
          >
            <SearchInput />
          </Col>
        </Hidden>
        <Col
          justify="end"
          align="end"
          xxl={1}
          xl={2}
          lg={3}
          md={2}
          sm={6}
          xs={6}
          className="language"
        >
          <Language />
        </Col>
      </Row>
    </Styled>
  );
};

export default Navbar;
