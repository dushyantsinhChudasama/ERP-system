import { Link, useLocation } from "react-router-dom";
import {
  FiBell,
  FiGlobe,
  FiStar,
  FiPlus,
  FiDatabase,
  FiUser,
  FiFolder,
  FiMoreHorizontal,
  FiLayers,
} from "react-icons/fi";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { id: "notifications", label: "Notifications", icon: <FiBell />, badge: 10, path: "/notifications" },
    { id: "technologies", label: "Technologies", icon: <FiGlobe />, path: "/technologies" },
    { id: "favorites", label: "Favorites", icon: <FiStar />, path: "/favorites" },
  ];

  const accounts = [
    { id: "all-accounts", label: "All Accounts", icon: <FiLayers />, path: "/accounts" },
    { id: "my-first-list", label: "My First List", icon: <FiDatabase />, path: "/", isActive: true },
    { id: "marketing-campaign", label: "Marketing Campaign", icon: <FiUser />, path: "/marketing" },
    { id: "private-list", label: "My Private List", icon: <FiFolder />, path: "/private" },
    { id: "default-list", label: "Default list Copy", icon: <FiFolder />, path: "/default" },
  ];

  const customers = [
    { id: "all-customers", label: "All Customers", icon: <FiLayers />, path: "/customers" },
  ];

  const renderItem = (item) => {
    // For demo purposes, we'll mark "My First List" as active if path is "/"
    const isActive = location.pathname === item.path || (item.isActive && location.pathname === "/");

    return (
      <Link
        key={item.id}
        to={item.path}
        className={`nav-item ${isActive ? "active" : ""}`}
      >
        <div className="item-left">
          <span className="item-icon">{item.icon}</span>
          <span>{item.label}</span>
        </div>
        {item.badge && <span className="badge">{item.badge}</span>}
        {isActive && item.id === "my-first-list" && <FiMoreHorizontal size={14} style={{ opacity: 0.7 }} />}
      </Link>
    );
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="org-icon">
          <FiLayers size={20} />
        </div>
        <div className="org-info">
          <span className="org-name">Serenity Technologies</span>
          <span className="org-plan">Base Plan</span>
        </div>
      </div>

      <div className="sidebar-content">
        <div className="nav-section">
          {navItems.map(renderItem)}
        </div>

        <div className="nav-section">
          <div className="section-header">
            <span>Accounts</span>
            <FiPlus size={14} style={{ cursor: "pointer" }} />
          </div>
          {accounts.map(renderItem)}
        </div>

        <div className="nav-section">
          <div className="section-header">
            <span>Customers</span>
            <FiPlus size={14} style={{ cursor: "pointer" }} />
          </div>
          {customers.map(renderItem)}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="user-avatar">
          {/* Placeholder for user image */}
          <div style={{ width: '100%', height: '100%', background: '#444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '10px' }}>JW</div>
        </div>
        <div className="user-info">
          <span className="user-name">John Williamson</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;