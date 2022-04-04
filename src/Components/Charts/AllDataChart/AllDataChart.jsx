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

const AllDataChart = () => {
  const chartData = useContext(ChartDataContext);
  return (
    <div className="rounded-lg shadow-xl p-10 flex justify-center items-center flex-col">
      <h3 className="text-2xl font-bold text-[#01acfa] capitalize my-10">
        All data chart
      </h3>
      <BarChart
        width={550}
        height={550}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        <Bar dataKey="sell" fill="#ffc658" />
      </BarChart>
    </div>
  );
};

export default AllDataChart;
