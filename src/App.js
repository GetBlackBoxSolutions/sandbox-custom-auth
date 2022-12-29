import React, { useState, useEffect } from "react";
import BasicRouting from "./infrastructure/routing/BasicRouting";
import { useRootStore } from "./infrastructure/hooks/useRootStoreContext";
import dataService from "./infrastructure/services/data-service";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const { currentUserStore, tokenStore } = useRootStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenStore.getAccessToken();

      if (token) {
        try {
          const { data: currentUserData } = await dataService.currentUser(
            token
          );

          if (currentUserData) {
            currentUserStore.setCurrentUser(
              currentUserData.displayName,
              currentUserData.userName
            );

            tokenStore.setLogin(true);
          }
        } catch (error) {
          if (token && error.response && error.response.status === 401) {
            currentUserStore.setCurrentUser(null, null);
            tokenStore.setAccessToken(null);
          }
        }
      }

      setIsLoading(false);
    })();
  }, [currentUserStore, tokenStore]);

  if (isLoading)
    return (
      <div className="full-page">
        <div className="spinner-container">
          <Spinner size="large" />
        </div>
      </div>
    );

  return <BasicRouting />;
}

export default App;
