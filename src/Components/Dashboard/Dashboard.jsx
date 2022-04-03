import React, { createContext } from "react";

import useChartData from "../../hooks/useChartData";
import InvestmentAreaChart from "../Charts/InvestmentAreaChart/InvestmentAreaChart";
import SellBarChart from "../Charts/SellBarChart/SellBarChart";
import RevenueInvestmentPieChart from "../Charts/RevenueInvestmentPieChart/RevenueInvestmentPieChart";
import AllDataChart from "../Charts/AllDataChart/AllDataChart";
export const ChartDataContext = createContext([]);
const Dashboard = () => {
  const [data, setData] = useChartData();

  return (
    <ChartDataContext.Provider value={data}>
      <div className="container mx-auto my-20">
        <div className="md:grid grid-cols-2 gap-10 my-16">
          <InvestmentAreaChart />
          <SellBarChart />
          <RevenueInvestmentPieChart />
          <AllDataChart />
        </div>
      </div>
    </ChartDataContext.Provider>
  );
};

export default Dashboard;
