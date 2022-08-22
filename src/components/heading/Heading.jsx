import React from "react";
import styled from "styled-components";

const Styled = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;
const Heading = ({ title }) => {
  return <Styled>{title}</Styled>;
};

export default Heading;
