import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { ChartDataContext } from "../../Dashboard/Dashboard";

const RevenueInvestmentPieChart = () => {
  const chartData = useContext(ChartDataContext);
  return (
    <div className="rounded-lg shadow-xl p-10 flex justify-center items-center flex-col">
      <h3 className="text-2xl font-bold text-[#01acfa] capitalize my-10">
        revenue and Investment chart
      </h3>
      <PieChart width={550} height={550}>
        <Pie
          data={chartData}
          dataKey="investment"
          outerRadius={150}
          fill="#01acfa5c"
        />
        <Pie
          data={chartData}
          dataKey="revenue"
          innerRadius={160}
          outerRadius={190}
          fill="#01acfa"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default RevenueInvestmentPieChart;
