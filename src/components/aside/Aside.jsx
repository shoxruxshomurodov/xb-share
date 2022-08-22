import { ChevronRightIcon, NewspaperIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import styled from "styled-components";
import MenuExpanded from "./MenuExpanded";
import MenuItem from "./MenuItem";
import MenuParent from "./MenuParent";

const Styled = styled.nav`
  position: relative;
  width: ${({ isOpen }) => (isOpen ? "330px" : "80px")};
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  -ms-transition: -ms-transform 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "0 20px 0 30px" : "0 5px")};
  height: 22px;
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? "" : "center")};
  height: 100vh;
  border-right: 1px solid #f3f3f3;
  .sidebar_controller {
    background: #2dc161;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    position: absolute;
    z-index: 9999;
    left: 100%;
    top: 10px;
    transform: translateX(-50%);
    border-radius: 50%;

    &__icon {
      width: 32px;
      height: 32px;
      color: #fff;
      -webkit-transition: -webkit-transform 0.3s ease-in-out;
      -ms-transition: -ms-transform 0.3s ease-in-out;
      transition: transform 0.3s ease-in-out;
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    }
  }
  .sidebar_menu {
    padding-top: 45px;
    &:first-child {
      margin-top: 10px;
    }
  }
`;
const Aside = () => {
  const [isOpen, setOpen] = useState(true);
  const sidebarHandle = () => {
    setOpen(!isOpen);
    console.log(isOpen, "openSidebar");
  };
  return (
    <Styled isOpen={isOpen}>
      <span className="sidebar_controller" onClick={sidebarHandle}>
        <ChevronRightIcon className="sidebar_controller__icon" />
      </span>
      <ul className="sidebar_menu">
        <MenuExpanded
          sidebarOpen={isOpen}
          title={"All Departments"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          }
        >
          <MenuParent title={"The First Section"} link={"/department-news"}>
            <MenuItem title="Handbook" />
            <MenuItem title="News" />
            <MenuItem title="Documents" />
          </MenuParent>
          <MenuParent title={"Software Department"} link={"/department-news"}>
            <MenuItem title="Handbook" />
            <MenuItem title="News" />
            <MenuItem title="Documents" />
          </MenuParent>
          <MenuParent title={"Risk Department"} link={"/department-news"}>
            <MenuItem title="Handbook" />
            <MenuItem title="News" />
            <MenuItem title="Documents" />
          </MenuParent>
          <MenuParent title={"Strategy Department"} link={"/department-news"}>
            <MenuItem title="Handbook" />
            <MenuItem title="News" />
            <MenuItem title="Documents" />
          </MenuParent>
          <MenuParent
            title={"Problem Loans Department"}
            link={"/department-news"}
          >
            <MenuItem title="Handbook" />
            <MenuItem title="News" />
            <MenuItem title="Documents" />
          </MenuParent>
        </MenuExpanded>
      </ul>
    </Styled>
  );
};

export default Aside;
