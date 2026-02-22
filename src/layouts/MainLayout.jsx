import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}