import axios from "axios";
import { useEffect, useState } from "react";

const useChartData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => setData(res.data));
  }, []);
  return [data, setData];
};
export default useChartData;
