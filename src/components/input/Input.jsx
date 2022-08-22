import React from "react";
import styled from "styled-components";

const Styled = styled.input`
  width: 100%;
  padding: 10px 15px;
`;
const Input = ({ ...props }) => {
  return <Styled {...props} />;
};

export default Input;
