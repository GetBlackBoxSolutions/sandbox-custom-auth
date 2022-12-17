import React from "react";
import { useAuth } from "../../infrastructure/hooks/useAuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Welcome {currentUser.displayName}</h4>
    </div>
  );
}
