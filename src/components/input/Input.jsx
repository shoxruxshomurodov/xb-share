import React from "react";
import styled from "styled-components";

const Styled = styled.input`
  padding: 15px 25px;
  border: 1px solid #cdcdcd;
  border-radius: 1px;
  display: block;
  width: 100%;
  outline: none;
  transition: 0.2s ease;
  font-size: 16px;
  &:focus {
    border-color: #2dc161;
    .search-form-btn {
      border: 1px solid #cdcdcd;
    }
  }
`;
const Input = ({ ...props }) => {
  return <Styled {...props} />;
};

export default Input;
