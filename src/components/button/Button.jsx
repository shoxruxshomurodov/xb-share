import React from "react";
import styled from "styled-components";

const Styled = styled.button`
  width: 100%;
  padding: 15px 0;
  background-color: ${(props) => (props.bg ? props.bg : "#2dc161")};
  border: none;
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  font-weight: 700;
`;
const Button = ({ title = "Button", ...props }) => {
  return <Styled {...props}>{title}</Styled>;
};

export default Button;
