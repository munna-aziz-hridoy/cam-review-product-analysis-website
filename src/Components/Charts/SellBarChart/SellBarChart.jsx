import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartDataContext } from "../../Dashboard/Dashboard";

const SellBarChart = () => {
  const chartData = useContext(ChartDataContext);
  console.log(chartData);
  return (
    <div className="rounded-lg shadow-xl p-10 flex justify-center items-center flex-col">
      <h3 className="text-2xl font-bold text-[#01acfa] capitalize my-10">
        sell bar chart
      </h3>
      <BarChart width={550} height={550} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Legend />
        <Bar dataKey="sell" fill="#01acfa" />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default SellBarChart;
