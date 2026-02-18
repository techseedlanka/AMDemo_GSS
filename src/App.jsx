import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import AssetRegister from './pages/AssetRegister';
import AddAsset from './pages/AddAsset';
import AssetDetails from './pages/AssetDetails';
import AssignAsset from './pages/AssignAsset';
import AssetReturn from './pages/AssetReturn';
import Maintenance from './pages/Maintenance';
import Expiry from './pages/Expiry';
import EmployeeSummary from './pages/EmployeeSummary';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="assets" element={<AssetRegister />} />
          <Route path="assets/:id" element={<AssetDetails />} />
          <Route path="add-asset" element={<AddAsset />} />
          <Route path="assign-asset" element={<AssignAsset />} />
          <Route path="asset-returns" element={<AssetReturn />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="expiry" element={<Expiry />} />
          <Route path="employees" element={<EmployeeSummary />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
