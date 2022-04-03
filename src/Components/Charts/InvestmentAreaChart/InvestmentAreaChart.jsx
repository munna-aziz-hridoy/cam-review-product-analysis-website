import React, { useContext } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartDataContext } from "../../Dashboard/Dashboard";

const InvestmentAreaChart = () => {
  const chartData = useContext(ChartDataContext);

  return (
    <div className="rounded-lg shadow-xl p-10 flex justify-center items-center flex-col">
      <h3 className="text-2xl font-bold text-[#01acfa] capitalize my-10">
        Investment area Chart
      </h3>
      <AreaChart data={chartData} width={550} height={550}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#01acfa"
          fill="#01acfa5c"
        />
        <Legend />
      </AreaChart>
    </div>
  );
};

export default InvestmentAreaChart;
