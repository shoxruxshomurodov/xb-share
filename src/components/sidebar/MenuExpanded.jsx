import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Styled = styled.div`
  .nav-item-expanded {
    cursor: pointer;
    display: flex;
    transition: all 0.3s;
    align-items: center;
  }
  .nav-text-expanded {
    color: ${(props) => (props.isOpen ? "#2dc161" : "")};
    display: flex;
    font-size: 20px;
    align-items: center;
  }
  .nav-icon-expanded {
    width: 24px;
    margin-right: 5px;
    display: flex;
    color: ${(props) => (props.isOpen ? "#2dc161" : "")};
    align-items: center;
    transition: rotate 0.3s ease;
  }
  .nav-icon-expanded-chevron {
    width: 24px;
    display: flex;
    color: ${(props) => (props.isOpen ? "#2dc161" : "")};
    align-items: center;
    transition: rotate 0.3s ease;
    transform: ${(props) =>
      props.isOpen ? "rotate(-90deg)" : "rotate(90deg)"};
  }
  .nav-sub-parent {
    margin-left: 22px;
    transition: all 0.3s;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    height: ${(props) => (props.isOpen ? "100%" : 0)};
    transform: ${(props) => (props.isOpen ? "#2dc161" : "")};
  }
`;
const MenuExpanded = ({
  children,
  isSidebarOpen,
  icon = "",
  title = "",
  iconClassname,
  titleClassname,
}) => {
  const [open, setOpen] = useState(false);
  const openParentMenu = () => {
    setOpen(!open);
  };
  return (
    <Styled isOpen={open}>
      <li className={`${open ? "active" : null}`}>
        <a onClick={openParentMenu} className="nav-item-expanded">
          {icon && (
            <span className={classNames("nav-icon-expanded", iconClassname)}>
              {icon}
            </span>
          )}
          <span className={classNames("nav-text-expanded", titleClassname)}>
            {title}
          </span>
          <span
            className={classNames("nav-icon-expanded-chevron", iconClassname)}
          >
            <ChevronRightIcon />
          </span>
        </a>
        <ul className={`nav-sub-parent ${open ? "nav-mega" : null}`}>
          {children}
        </ul>
      </li>
    </Styled>
  );
};

export default MenuExpanded;
