import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Register from "./pages/auth/Register.js";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import Policy from "./pages/Policy.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Layout/Routes/Private.js";
import ForgotPassword from "./pages/auth/ForgotPassword.js";
import AdminDashboard from "./pages/admin/AdminDashboard.js";
import AdminRoute from "./components/Layout/Routes/AdminRoute.js";
import CreateCategory from "./pages/admin/CreateCategory.js";
import CreateProduct from "./pages/admin/CreateProduct.js";
import User from "./pages/admin/User.js";
import Profile from "./pages/user/Profile.js";
import Orders from "./pages/user/Orders.js";
import Products from "./pages/admin/Products.js";
import UpdateProduct from "./pages/admin/UpdateProduct.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<User />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
};

export default App;
