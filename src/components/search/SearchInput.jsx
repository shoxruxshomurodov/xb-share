import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { SearchIcon } from "@heroicons/react/solid";
const Styled = styled.form`
  display: flex;
  .search-form-input {
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
  }
  .search-icon {
    position: absolute;
    width: 26px;
    height: 26px;
    color: #000;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  @media screen and (max-width: 1280px) {
    .search-form-input {
      padding: 8px 10px;
      font-size: 14px;
    }
    .search-icon {
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }
`;
const SearchInput = ({ ...rest }) => {
  return (
    <Styled {...rest}>
      <input
        placeholder={"Поиск"}
        type="text"
        className={"search-form-input"}
      />
      <SearchIcon className={"search-icon"} />
    </Styled>
  );
};

export default SearchInput;
