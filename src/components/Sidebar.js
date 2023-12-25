import React from "react";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import { useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ onLogout }) {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null; // ไม่แสดง Sidebar ในหน้า Login
  }

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} onLogout={onLogout} />
      ))}
    </div>
  );
}
