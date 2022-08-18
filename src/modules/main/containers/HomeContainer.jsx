import { get } from "lodash";
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useStore } from "../../../store";

const Styled = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeContainer = () => {
  const setBreadcrumbs = useStore((state) =>
    get(state, "setBreadcrumbs", () => {})
  );

  const breadcrumbs = useMemo(() => [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    [],
  ]);
  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  }, []);

  return (
    <Styled>
      <h1>HomeContainer</h1>
    </Styled>
  );
};

export default HomeContainer;
