import React, { useContext } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
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
      <ComposedChart
        width={550}
        height={550}
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="revenue"
          fill="#01acfa"
          stroke="#01acfa"
        />
        <Bar dataKey="sell" barSize={200} fill="#01acfa" />
        <Line type="monotone" dataKey="investment" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default AllDataChart;
