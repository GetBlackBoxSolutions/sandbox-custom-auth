import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ProtectedRouting from "../../infrastructure/routing/ProtectedRouting";
import NotFound from "../../pages/NotFound/NotFound";
import { useRootStore } from "../hooks/useRootStoreContext";
import About from "../../pages/About/About";
import Profile from "../../pages/Profile/Profile";

export default function BasicRouting() {
  const { currentUser } = useRootStore();

  return (
    <Routes>
      <Route element={<ProtectedRouting />}>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<About />} path="/about" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Dashboard />} path="/" />
      </Route>
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/" /> : <Login />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
