import React, { useCallback, useState } from "react";
import {
  PieChart as Chart,
  Pie,
  Sector,
  Cell,
  Label,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const Styled = styled.div`
  .piechart_label {
    font-size: 24px;
  }
`;
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#a19894"];

const PieChart = () => {
  return (
    <Styled>
      <Chart width={220} height={220}>
        <Pie
          data={data}
          innerRadius={95}
          outerRadius={110}
          dataKey="value"
          title={"HEllo"}
        >
          <Label position="center" className="piechart_label">
            User 23
          </Label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </Chart>
    </Styled>
  );
};
export default PieChart;
