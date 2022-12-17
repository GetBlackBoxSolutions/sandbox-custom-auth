import { useMemo } from "react";
import { createContext, useContext } from "react";
import authStore from "../stores/authStore";

const AuthContext = createContext(authStore);

export function AuthProvider({ userData, children }) {
  const store = useMemo(() => {
    if (userData) {
      const { data } = userData;
      authStore.setCurrentUser(data);
    }

    return authStore;
  }, [userData]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
