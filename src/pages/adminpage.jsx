// pages/AdminPage.js (Simplified)
import React, { useState } from "react";
import AdminPanel from "../components/adminpanel";
import AdminSidebar from "../components/adminsidebar";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [activeSection, setActiveSection] = useState("product-management");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    navigate('/admin-login');
  };

  const renderContent = () => {
    switch (activeSection) {
      case "product-management":
        return <AdminPanel />;
      case "order-table":
        return (
          <div style={{ padding: "20px" }}>
            <h2>Order Table Management</h2>
            <p>Order table content will be displayed here.</p>
          </div>
        );
      case "order-items":
        return (
          <div style={{ padding: "20px" }}>
            <h2>Order Items Management</h2>
            <p>Order items content will be displayed here.</p>
          </div>
        );
      default:
        return <AdminPanel />;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onLogout={handleLogout}
      />
      <div style={{ flex: 1, padding: "20px", marginLeft: "250px" }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default AdminPage;