import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HR from "./pages/HR";
import Inventory from "./pages/Inventory";
import Finance from "./pages/Finance";
import Support from "./pages/Support";
import IT from "./pages/IT";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="hr" element={<HR />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="finance" element={<Finance />} />
        <Route path="support" element={<Support />} />
        <Route path="it" element={<IT />} />
      </Route>
    </Routes>
  );
}

export default App;