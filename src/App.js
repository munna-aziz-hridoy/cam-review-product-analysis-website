import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Error404 from "./Components/Error404/Error404";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
