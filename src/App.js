import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TQF7_0 from "./pages/TQF7_0";
import TQF7_1 from "./pages/TQF7_1";
import TQF7_2 from "./pages/TQF7_2";
import TQF7_3 from "./pages/TQF7_3";
import Extrapoints from "./pages/Extrapoints";
import Assessment from "./pages/Assessment";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HP_professor from './pages/HP_professor'
import HP_Student from "./pages/HP_Student";
import Data_Student from "./pages/Data_Student";
import Data_professor from "./pages/Data_professor";

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };
  console.log('user:', user);
  useEffect(() => {
    // Effect Hook นี้จะทำงานเมื่อค่าใน localStorage เปลี่ยนแปลง
    const handleStorageChange = () => {
      setUser(localStorage.getItem('user'));
    };

    // ติดตามการเปลี่ยนแปลงของ localStorage
    window.addEventListener('storage', handleStorageChange);

    // Cleanup function เมื่อ component unmount หรือถูกเรียกใช้ Effect Hook อีกครั้ง
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // แน่ใจว่า useEffect นี้ถูกเรียกหนึ่งครั้งเมื่อ component mount
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/tqf.7_0" element={parseInt(user) === 2 ? <TQF7_0 /> : <Navigate to="/home" />} />
          <Route path="/tqf.7_1" element={parseInt(user) === 2 ? <TQF7_1 /> : <Navigate to="/home" />} />
          <Route path="/tqf.7_2" element={parseInt(user) === 2 ? <TQF7_2 /> : <Navigate to="/home" />} />
          <Route path="/tqf.7_3" element={parseInt(user) === 2 ? <TQF7_3 /> : <Navigate to="/home" />} />
          <Route path="/extrapoints" element={parseInt(user) === 1 ? <Extrapoints /> : <Navigate to="/home" />} />
          <Route path="/assessment" element={parseInt(user) === 1 ? <Assessment /> : <Navigate to="/home" />} />
          <Route
            path="/home"
            element={parseInt(user) === 1 || parseInt(user) === 2 || parseInt(user) === 3 ? <Home /> : <Navigate to="/home" />}
          />
          <Route path="/HP_professor" element={parseInt(user) === 2 ? <HP_professor /> : <Navigate to="/home" />} />
          <Route path="/HP_Student" element={parseInt(user) === 1 ? <HP_Student /> : <Navigate to="/home" />} />
          <Route path="/Data_Student" element={parseInt(user) === 1 ? <Data_Student /> : <Navigate to="/home" />} />
          <Route path="/Data_professor" element={parseInt(user) === 2 ? <Data_professor /> : <Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
