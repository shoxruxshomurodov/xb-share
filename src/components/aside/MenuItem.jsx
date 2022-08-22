import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ title, link = "" }) => {
  return (
    <li>
      <NavLink to={link}>{title}</NavLink>
    </li>
  );
};

export default MenuItem;
