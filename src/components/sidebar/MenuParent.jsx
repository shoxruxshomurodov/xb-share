import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Styled = styled.div`
  list-style-type: none;
  transition: all 0.3s;
  cursor: pointer;
  margin-bottom: 5px;
  .nav-item {
    display: flex;
    align-items: center;
    transition: all 0.3s;
  }
  .nav-text {
    color: ${(props) => (props.isOpen ? "#2dc161" : "")};
    display: flex;
    font-size: 18px;
  }
  .nav-icon svg {
    margin-left: 5px;
    width: 16px;
    display: flex;
    color: ${(props) => (props.isOpen ? "#2dc161" : "")};
    align-items: center;
    transition: rotate 0.3s ease;
    transform: ${(props) =>
      props.isOpen ? "rotate(-90deg)" : "rotate(90deg)"};
  }
  .nav-sub {
    transition: all 0.3s;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    height: ${(props) => (props.isOpen ? "100%" : 0)};
    transform: ${(props) => (props.isOpen ? "#2dc161" : "")};
    margin-left: 30px;
  }
`;
const MenuParent = ({
  children,
  isSidebarOpen,
  icon = "",
  title = "",
  titleClassname,
}) => {
  const [open, setOpen] = useState(false);

  const openSubmenu = () => {
    if (!isSidebarOpen) {
      setOpen(false);
    }
    setOpen(!open);
  };
  return (
    <Styled isOpen={open}>
      <li className={`${open ? "active" : null}`}>
        <p onClick={openSubmenu} className="nav-item">
          <span className={classNames("nav-text", titleClassname)}>
            {title}
          </span>
          <span className="nav-icon">
            <ChevronRightIcon />
          </span>
        </p>
        <ul className={`nav-sub ${open ? "nav-mega" : null}`}>{children}</ul>
      </li>
    </Styled>
  );
};

export default MenuParent;
