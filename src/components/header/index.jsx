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
  @media screen and (max-width: 1024px) {
    .header_top p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    .header_top p {
      font-size: 12px;
    }
  }
`;

const Header = ({ ...rest }) => {
  return (
    <Styled {...rest} className="header">
      <Row justify="center" className="header_top">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Row>
    </Styled>
  );
};

export default Header;
