import React from "react";
import styled from "styled-components";

const Styled = styled.h2`
  width: 100%;
  font-size: 36px;
  font-weight: 500;
`;
const Heading = ({ title }) => {
  return <Styled>{title}</Styled>;
};

export default Heading;
