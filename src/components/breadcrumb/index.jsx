import React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";

const Styled = styled.nav`
  .breadcrumb {
    background: #f3f3f3;
    padding: 10px 50px;
    .breadcrumb_info-list {
      display: flex;
      justify-content: space-between;
    }
    .breadcrumb_info__item {
      display: flex;
      align-items: center;
      &__text {
        font-weight: 500;
        &:first-child {
          margin-right: 3px;
        }
      }
      &__icon {
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #f00;
        margin-left: 2px;
      }
      &__icon_increase {
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #2dc161;
        margin-left: 2px;
      }
    }
  }
`;

const Breadcrumb = ({ ...rest }) => {
  return (
    <Styled>
      <Container fluid>
        <Row className="breadcrumb" align="center" justify="between">
          <Col md={7}>
            <h3>Home</h3>
          </Col>
          <Col md={4}>
            <ul className="breadcrumb_info-list">
              <li className="breadcrumb_info__item">
                <span className="breadcrumb_info__item__text">USD</span>
                <span className="breadcrumb_info__item__text">10920.28</span>
                <span className="breadcrumb_info__item__icon"></span>
              </li>
              <li className="breadcrumb_info__item">
                <span className="breadcrumb_info__item__text">RUB</span>
                <span className="breadcrumb_info__item__text">10920.28</span>
                <span className="breadcrumb_info__item__icon"></span>
              </li>
              <li className="breadcrumb_info__item">
                <span className="breadcrumb_info__item__text">EUR</span>
                <span className="breadcrumb_info__item__text">10920.28</span>
                <span className="breadcrumb_info__item__icon_increase"></span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Styled>
  );
};

export default Breadcrumb;
