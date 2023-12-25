import { useState } from "react";

export default function SidebarItem({ item, onLogout }) {
  const [open, setOpen] = useState(false);

  
  const handleItemClick = () => {
    if (item.path === "/login" && onLogout) {
      onLogout();
    }
  };
  
   if (item.childrens) {
    return (
      <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
        <div className="sidebar-title" onClick={handleItemClick}>
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i className="bi-caret-down-fill toggle-btn" onClick={() => setOpen(!open)} />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || '#'} className="sidebar-item plain" onClick={handleItemClick}>
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
}