import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRootStore } from "../hooks/useRootStoreContext";

export default function ProtectedRouting() {
  const { currentUserStore } = useRootStore();
  return currentUserStore.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
