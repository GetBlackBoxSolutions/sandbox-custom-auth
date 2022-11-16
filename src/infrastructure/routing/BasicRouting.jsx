import React, { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ProtectedRouting from "../../infrastructure/routing/ProtectedRouting";
import NotFound from "../../pages/NotFound/NotFound";
import dataService from "../services/data-service";
import { useRootStore } from "../hooks/useRootStoreContext";

export default function BasicRouting() {
  const { currentUserStore } = useRootStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = currentUserStore.getAccessToken();

      if (token) {
        try {
          const { data: currentUserData } = await dataService.currentUser(
            token
          );

          if (currentUserData) {
            currentUserStore.setCurrentUser(
              currentUserData.displayName,
              currentUserData.userName,
              currentUserData.token
            );
          }
        } catch (error) {
          if (token && error.response && error.response.status === 401) {
            currentUserStore.setCurrentUser(null, null, null);
          }
        }
      }
      setIsLoading(false);
    })();
  }, [currentUserStore]);

  if (isLoading) return <h1>loading...</h1>;

  return (
    <Routes>
      <Route element={<ProtectedRouting />}>
        <Route element={<Dashboard />} path="/dashboard" exact />
        <Route element={<Dashboard />} path="/" exact />
      </Route>
      <Route
        path="/login"
        element={currentUserStore.isLoggedIn ? <Navigate to="/" /> : <Login />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
