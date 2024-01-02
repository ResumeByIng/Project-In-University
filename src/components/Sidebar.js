import React from "react";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import { useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ }) {
  const location = useLocation();

  if (location.pathname === "/login") {
    localStorage.clear()
    return null;
  }

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
