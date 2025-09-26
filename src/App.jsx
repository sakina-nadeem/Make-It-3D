// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import SecondPage from "./pages/secondpage";
import ThirdPage from "./pages/thirdpage";
import ProductsPage from "./pages/productspage";
import CartPage from "./pages/cartpage";
import AdminPage from "./pages/adminpage";
import AdminLogin from "./pages/adminlogin";
import ProtectedRoute from "./components/protectedroute";
import OrderConfirmation from "./pages/orderconfirmation";
import NotFound from "./pages/notfound";
import products from "./data/products";
import { CartProvider } from "./context/cartcontext";
import TestConnection from "./components/testconnection";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/test-connection" element={<TestConnection />} />

          {/* Protected Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-confirmation"
            element={
              <ProtectedRoute>
                <OrderConfirmation />
              </ProtectedRoute>
            }
          />

          {/* Admin Route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin>
                <AdminPage />
              </ProtectedRoute>
            }
          />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
