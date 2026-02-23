import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HR from "./pages/HR";
import Inventory from "./pages/Inventory";
import Finance from "./pages/Finance";
import Support from "./pages/Support";
import IT from "./pages/IT";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="hr" element={<HR />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="finance" element={<Finance />} />
        <Route path="support" element={<Support />} />
        <Route path="it" element={<IT />} />
      </Route>
      {/* Redirect any unmatched route to login for now */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
