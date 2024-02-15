import React, { useState, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import { useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUserRole = JSON.parse(localStorage.getItem('user'));
    setUserRole(storedUserRole);
  }, [location.pathname]); // เพิ่ม location.pathname เพื่อให้ useEffect ทำงานเมื่อ location.pathname เปลี่ยน

  if (location.pathname === "/login") {
    localStorage.clear();
    return null;
  }

  return (
    <div className="sidebar" style={{ width: '15%', height: '100%' }}>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} userRole={userRole} />
      ))}
    </div>
  );
}
