import React from "react";
import Header from "../../components/Header/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";

export default function ProtectedRouting() {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" replace />;

  return (
    <div id="main-page">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
