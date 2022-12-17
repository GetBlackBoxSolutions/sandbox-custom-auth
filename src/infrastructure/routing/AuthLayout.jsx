import React, { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuthContext";
import Spinner from "../../components/Spinner/Spinner";

export default function AuthLayout() {
  const outlet = useOutlet();
  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<Spinner />}>
      <Await
        resolve={userPromise}
        errorElement={<h1>Something went wrong!</h1>}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
}
