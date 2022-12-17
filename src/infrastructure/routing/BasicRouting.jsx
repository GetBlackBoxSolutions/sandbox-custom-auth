import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";

export default function BasicRouting() {
  const { currentUser } = useAuth();
  if (currentUser) return <Navigate to="/" replace />;
  return <Outlet />;
}
