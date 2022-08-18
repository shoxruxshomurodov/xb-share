import { get } from "lodash";
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useStore } from "../../../../store";

const Styled = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  margin: 15px 0 0 0;
`;

const RiskDepartmentContainer = () => {
  const setBreadcrumbs = useStore((state) =>
    get(state, "setBreadcrumbs", () => {})
  );
  const breadcrumbs = useMemo(
    () => [
      {
        id: 1,
        title: "Home",
        path: "/",
      },
      {
        id: 2,
        title: "Risk Department",
        path: "risk-department",
      },
    ],
    []
  );
  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  }, []);

  return (
    <Styled>
      <h1>RiskDepartmentContainer</h1>
    </Styled>
  );
};

export default RiskDepartmentContainer;
