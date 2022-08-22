import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Styled = styled.li`
  .parent_menu {
    display: flex;
    align-items: center;
    font-size: 20px;
    /* justify-content: ${({ sidebarOpen }) =>
      sidebarOpen ? "" : "center"}; */
    cursor: pointer;
  }
  .parent_menu_title {
    color: ${({ expanded }) => (expanded ? "#2dc161" : "#000")};
    transition: all 0.3s ease;
    &::after {
      content: ">";
      display: inline-block;
      margin-left: 10px;
      font-size: 20px;
      font-weight: bold;
      color: ${({ expanded }) => (expanded ? "#2dc161" : "#000")};
      transform: ${({ expanded }) =>
        expanded ? "rotate(90deg)" : "rotate(0deg)"};
      -webkit-transition: -webkit-transform 0.3s ease-in-out;
      -ms-transition: -ms-transform 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
  }
  .parent_menu_list {
    list-style-type: disc;
    font-size: 18px;
    margin-left: 40px;
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    -ms-transition: -ms-transform 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    max-height: ${({ expanded }) => (expanded ? "100%" : "0px")};
    /* transform: ${({ sidebarOpen }) =>
      sidebarOpen ? "translateX(0%)" : "translateX(-400%)"}; */
    opacity: ${({ expanded }) => (expanded ? "1" : "0")};
    visibility: ${({ expanded }) => (expanded ? "visible" : "hidden")};
    transition: max-height 0.5s ease, visibility 0.5s, opacity 0.5s linear,
      transform 0.5s linear;
  }
  .parent_menu__arrow-icon {
    display: flex;
    align-items: center;
    /* display: ${({ sidebarOpen }) => (sidebarOpen ? "block" : "none")}; */
    margin-left: 5px;
    color: #000;
    width: 14px;
    height: 14px;
    color: ${({ expanded }) => (expanded ? "#2dc161" : "#000")};
    transform: ${({ expanded }) =>
      expanded ? "rotate(90deg)" : "rotate(0deg)"};
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    -ms-transition: -ms-transform 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;

const MenuParent = ({ title, link = "", children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Styled expanded={expanded}>
      <NavLink
        to={link}
        className="parent_menu"
        onClick={(prev) => {
          setExpanded(!expanded);
        }}
      >
        <a>
          <span className="parent_menu_title">{title}</span>
        </a>
      </NavLink>
      <ul className="parent_menu_list">{children}</ul>
    </Styled>
  );
};

export default MenuParent;
