import React from "react";
import { Col, Container, Hidden, Row, Visible } from "react-grid-system";
import styled from "styled-components";
import Language from "../lang";
import SearchInput from "../search";
import LogoImage from "../../assets/images/logo.svg";
const Styled = styled.header`
  .header_top {
    background: #041e42;
    color: #fff;
    padding: 6px 0;
  }
  .header_main {
    padding: 10px 50px;
  }
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
    .header_main {
      padding: 10px 20px;
      display: flex;
      &__input {
        display: none;
      }
    }
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
  @media screen and (max-width: 1024px) {
    .header_top p {
      font-size: 12px;
    }
  }
`;

const Header = ({ ...rest }) => {
  return (
    <Styled {...rest}>
      <Container fluid className="header">
        <Row justify="center" className="header_top">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            molestias.
          </p>
        </Row>
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
            <Col xxl={8} xl={7} lg={6} md={7} sm={5}>
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
      </Container>
    </Styled>
  );
};

export default Header;
