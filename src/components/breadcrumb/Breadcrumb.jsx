import React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import { useStore } from "../../store";
import { get, isEqual } from "lodash";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const Styled = styled.nav`
  .breadcrumb {
    padding: 12px 30px;
    &_list {
      display: flex;
    }
    &_link {
      margin-right: 16px;
      color: #000;
      &-active {
        color: #2dc161;
      }
    }
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
  @media screen and (max-width: 1280px) {
    .breadcrumb {
      padding: 12px 20px;
    }
    .breadcrumb_info__item__text {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    .breadcrumb_list {
      margin-top: 5px;
      font-size: 14px;
    }
  }
`;

const Breadcrumb = ({ ...rest }) => {
  const { t } = useTranslation();
  const items = useStore((state) => get(state, "breadcrumbs", []));
  return (
    <Styled>
      <Row className="breadcrumb" align="center" justify="between">
        <Col md={7} sm={12} xs={12} order={{ md: 1, sm: 2, xs: 2 }}>
          <ul className="breadcrumb_list">
            {items &&
              items.map((item, i) => (
                <li key={get(item, "id", i)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "breadcrumb_link-active" : "breadcrumb_link"
                    }
                    to={get(item, "path", "#")}
                  >
                    {get(item, "title")}
                  </NavLink>
                </li>
              ))}
          </ul>
        </Col>
        <Col md={3} sm={12} xs={12} order={{ md: 2, sm: 1, xs: 1 }}>
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
    </Styled>
  );
};

export default Breadcrumb;
