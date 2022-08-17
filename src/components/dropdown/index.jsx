import React, { memo, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { isArray, get } from "lodash";
import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";

const DropdownStyle = styled.div`
  position: relative;
  display: inline-block;
  /* justify-content: end;
  align-items: center; */

  ${({ sizeAuto }) =>
    sizeAuto &&
    css`
      height: auto;
      width: auto;
    `}
  .dropDown {
    &__button {
      cursor: pointer;
    }
    &__body {
      will-change: transform;
      background: #ffffff;
      box-shadow: 0px 2px 10px rgba(40, 40, 40, 0.3);
      border-radius: 8px;
      position: absolute;
      top: 105%;
      width: 100%;
      right: 0;
      transition: 0.1s;
      overflow: hidden;
      z-index: 2;
      display: inline-block;
      opacity: 0;
      transform: translateX(0px) scale(0) translateZ(0px);
      &__option {
        /* padding: 6px 15px; */
      }
    }
  }
  &.dropDown {
    &.active {
      .rs-anim-bounce-in,
      .rs-anim-bounce-out {
        z-index: 2;
      }
      .dropDown__body {
        /* min-width: 140px; */
        /* &__option {
          height: 100%;
        } */
      }
    }
  }

  ${({ isFixed, x, y }) =>
    isFixed &&
    x &&
    y &&
    css`
      .dropDown {
        &__body {
          position: fixed;
          top: ${y}px;
          left: ${x}px;
          transition: none;
        }
      }
    `}
`;

const Dropdown = ({
  button,
  options,
  children,
  className = "",
  sizeAuto = false,
  isClose,
  active,
  onClose = () => "",
  onChange = () => "",
  isFixed = false,
  getXandY = () => "",
}) => {
  const [show, setShow] = useState(false);
  const [lastPosition, setLastPosition] = useState({});

  const handleToggle = (e) => {
    e.stopPropagation();
    show && onClose();
    onChange(!show);
    setShow((s) => !s);
    isFixed &&
      setLastPosition((s) => ({
        x: get(e, "clientX", 0),
        y: get(e, "clientY", 0),
      }));
    isFixed &&
      getXandY({ x: get(e, "clientX", 0), y: get(e, "clientY", 0), other: e });
  };

  useEffect(() => {
    if (isClose) setShow(false);
  }, [isClose]);

  useEffect(() => {
    if (active) setShow(true);
    else if (active === false) setShow(false);
  }, [active]);

  return (
    <DropdownStyle
      className={classNames("dropDown", {
        active: show,
        [className]: className,
        isFixed: isFixed,
      })}
      {...{
        sizeAuto,
        x: isFixed ? get(lastPosition, "x") : null,
        y: isFixed ? get(lastPosition, "y") : null,
        isFixed,
      }}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          show && onClose();
          show && onChange(!show);
          setShow(false);
        }}
      >
        <div className="dropDown__button" onClick={handleToggle}>
          {" "}
          {button}{" "}
        </div>
        <motion.div
          animate={{
            x: 0,
            scale: show ? 1 : 0,
            opacity: show ? 1 : 0,
            transitionEnd: {
              // display: "none",
            },
          }}
          transition={{ type: "spring", duration: 0.2 }}
          style={{ display: "inline-block" }}
          className="dropDown__body"
        >
          {isArray(options) &&
            options.map((val, ind) => (
              <div
                key={ind + Math.floor(Math.random() * 99999999999)}
                className="dropDown__body__option"
                onClick={() => handleToggle}
              >
                {" "}
                {val}{" "}
              </div>
            ))}
          {children}
        </motion.div>
      </OutsideClickHandler>
    </DropdownStyle>
  );
};

export default memo(Dropdown);
