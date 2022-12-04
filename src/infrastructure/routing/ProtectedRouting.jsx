import React from "react";
import Header from "../../components/Header/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useRootStore } from "../hooks/useRootStoreContext";

export default function ProtectedRouting() {
  const { tokenStore } = useRootStore();

  return tokenStore.isLoggedIn ? (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
