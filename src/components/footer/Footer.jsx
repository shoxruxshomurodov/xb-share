import React from "react";
import { Container, Row } from "react-grid-system";
import styled from "styled-components";

const Styled = styled.div`
  .footer {
    background: #f3f3f3;
    p {
      padding: 8px 0;
    }
  }
`;
const Footer = () => {
  return (
    <Styled>
      <Row className="footer" justify="center">
        <p>&copy; 2020 Xalq Banki, All Rights Reserved.</p>
      </Row>
    </Styled>
  );
};

export default Footer;
