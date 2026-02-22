import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "220px", background: "#1e293b", color: "white", height: "100vh", padding: "20px" }}>
      <h2>ERP</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/" style={{ color: "white" }}>Dashboard</Link></li>
        <li><Link to="/hr" style={{ color: "white" }}>HR</Link></li>
        <li><Link to="/inventory" style={{ color: "white" }}>Inventory</Link></li>
        <li><Link to="/finance" style={{ color: "white" }}>Finance</Link></li>
        <li><Link to="/support" style={{ color: "white" }}>Support</Link></li>
        <li><Link to="/it" style={{ color: "white" }}>IT</Link></li>
      </ul>
    </div>
  );
}