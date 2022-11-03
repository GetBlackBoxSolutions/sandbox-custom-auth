import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ProtectedRouting from "../../infrastructure/routing/ProtectedRouting";
import NotFound from "../../pages/NotFound/NotFound";

export default function BasicRouting() {
  return (
    <Routes>
      <Route element={<ProtectedRouting />}>
        <Route element={<Dashboard />} path="/dashboard" exact />
        <Route element={<Dashboard />} path="/" exact />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
