import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TQF7_0 from "./pages/TQF7_0";
import TQF7_1 from "./pages/TQF7_1";
import TQF7_2 from "./pages/TQF7_2";
import TQF7_3 from "./pages/TQF7_3";
import Extrapoints from "./pages/Extrapoints";
import Assessment from "./pages/Assessment";
import Information from "./pages/Information";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tqf.7_0" element={<TQF7_0 />} />
          <Route path="/tqf.7_1" element={<TQF7_1 />} />
          <Route path="/tqf.7_2" element={<TQF7_2 />} />
          <Route path="/tqf.7_3" element={<TQF7_3 />} />
          <Route path="/extrapoints" element={<Extrapoints />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/information" element={<Information />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
