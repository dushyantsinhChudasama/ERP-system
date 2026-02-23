import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", width: "100%", backgroundColor: "#f9fafb", margin: 0, padding: 0 }}>

      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}