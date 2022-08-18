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

const SoftwareDepartmentContainer = () => {
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
        title: "Software Department",
        path: "software-department",
      },
    ],
    []
  );
  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  }, []);

  return (
    <Styled>
      <h1>SoftwareDepartmentContainer</h1>
    </Styled>
  );
};

export default SoftwareDepartmentContainer;
