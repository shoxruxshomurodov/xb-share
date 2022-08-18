import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MenuAlt2Icon, ShareIcon } from "@heroicons/react/solid";
import departmentIcon from "../../assets/images/hierarchy.svg";
import MenuParent from "./MenuParent";
import MenuItem from "./MenuItem";
import MenuExpanded from "./MenuExpanded";
const Styled = styled.nav`
  width: ${({ isOpen }) => (isOpen ? "100%" : "30%")};
  transition: all 0.3s ease;

  .sidebar_controller {
    &__icon {
      width: 30px;
      color: #2dc161;
      cursor: pointer;
    }
  }

  .link_list {
    /* li {
      transition: ${({ isOpen }) =>
      isOpen ? "all 0.2s ease-in" : "all 0.2s ease-in"};
      opacity: ${(props) => (props.isOpen ? 1 : 0)};
      height: ${(props) => (props.isOpen ? "100%" : 0)};
      width: ${(props) => (props.isOpen ? "100%" : "400px")};
      display: ${({ isOpen }) =>
      isOpen ? "translateX(0%);" : "translateX(-300%)"};
    } */
    a {
      color: #000;
    }
    .link_item__active {
      color: #2dc161;
      transition: all 0.3s ease;
    }
  }
  .parent_link {
    &__icon {
      width: 24px;
      color: #2dc161;
    }
  }
`;
const Sidebar = ({ isOpen, sidebarHandler, ...rest }) => {
  return (
    <Styled isOpen={isOpen}>
      <div className="sidebar_controller">
        <MenuAlt2Icon
          className="sidebar_controller__icon"
          onClick={sidebarHandler}
        />
      </div>
      <ul className="link_list">
        {/* <MenuExpanded
          iconClassname={"text-primary"}
          title={"All Departments"}
          icon={
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="send"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <defs>
                <style></style>
              </defs>
              <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
            </svg>
          }
        >
          <MenuParent
            icon={
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="send"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <defs>
                  <style></style>
                </defs>
                <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
              </svg>
            }
            iconClassname={"text-primary"}
            title={"Risk Department"}
          >
            <MenuItem to={"/workflow/processes"} title={"Handbook"} />
            <MenuItem to={"/workflow/processes"} title={"Documents"} />
            <MenuItem to={"/workflow/processes"} title={"Events"} />
          </MenuParent>
          <MenuParent iconClassname={"text-primary"} title={"Risk Department"}>
            <MenuItem to={"/workflow/processes"} title={"Handbook"} />
            <MenuItem to={"/workflow/processes"} title={"Documents"} />
            <MenuItem to={"/workflow/processes"} title={"Events"} />
          </MenuParent>
        </MenuExpanded> */}
        <MenuExpanded
          iconClassname={"text-primary"}
          title={"All Departments"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
          }
        ></MenuExpanded>
      </ul>
    </Styled>
  );
};

export default Sidebar;
