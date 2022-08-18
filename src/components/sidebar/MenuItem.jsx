import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import { get, isEqual } from "lodash";
import styled from "styled-components";

const Styled = styled.li`
  list-style-type: disc;
  color: #000;

  a {
    color: #000;
  }
`;
const MenuItem = ({ to, icon, title, iconClassname, titleClassname }) => {
  let location = useLocation();
  return (
    <Styled className={isEqual(get(location, "pathname"), to) ? "active" : ""}>
      <NavLink to={to}>
        {icon && (
          <span className={classNames("nav-icon", iconClassname)}>{icon}</span>
        )}
        <span className={classNames("nav-text-child", titleClassname)}>
          {title}
        </span>
      </NavLink>
    </Styled>
  );
};
export default MenuItem;
