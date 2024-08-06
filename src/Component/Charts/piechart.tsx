import React, { useState } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import { PieChartLabel } from "../../utils/helper.tsx";

interface PieChartData {
    name?:string;
    value?:number;
    color?:string;
}

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-auto h-auto px-3 rounded-md flex justify-center items-center bg-tooltip-color opacity-100 text-xs">
        <p className="w-full">
          {`${payload[0]?.name} : `} <span>{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};
export default function RechartPieChart({
  data= [],
  cx = 50,
  cy = 50,
  innerRadius = 25,
  outerRadius = 65,
  grid = "grid-cols-2",
  totalCount,
  label1,
  label2
}
:{
    data:PieChartData[],
    cx?:number,
    cy?:number,
    innerRadius?:number,
    outerRadius?:number,
    grid?:string,
    totalCount:string,
    label1:string,
    label2?:string
}) {

  const [hovered1, setHovered1] = useState(undefined);
  return (
    <div className={`w-full grid ${grid} overflow-hidden`}>
      <div className="col-span-1">
        <PieChart width={105} height={105}>
          <Pie
            dataKey="value"
            minAngle={3}
            data={data}
            cx={cx}
            cy={cy}
            startAngle={90}
            endAngle={-270} 
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            fill="#82CA9D"
            onMouseOver={(event, index) => {
              setHovered1(index);
            }}
            onMouseOut={() => {
              setHovered1(undefined);
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                style={{
                  filter: `${index === hovered1 && `drop-shadow(0px 0px 2px ${entry?.color}`}`,
                  transitionDelay: "2s",
                  transitionTimingFunction: "ease-in-out",
                  cursor: "pointer"
                }}
                fill={entry?.color}
              />
            ))}
            <Label
              width={80}
              position="center"
              content={<PieChartLabel value1={totalCount} value2={label1} value3={label2} />}
            ></Label>
          </Pie>
   
        </PieChart>
      </div>
    </div>
  );
}