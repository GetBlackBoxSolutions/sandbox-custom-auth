import React from "react";
import {
  Route,
  defer,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ProtectedRouting from "./infrastructure/routing/ProtectedRouting";
import BasicRouting from "./infrastructure/routing/BasicRouting";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import AuthLayout from "./infrastructure/routing/AuthLayout";
import authStore from "./infrastructure/stores/authStore";
import dataService from "./infrastructure/services/data-service";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => {
        const token = authStore.tokenStore.getAccessToken();
        let getUserData = new Promise((resolve) => resolve(0));
        if (token) {
          getUserData = dataService.currentUser(token);
        }

        return defer({ userPromise: getUserData });
      }}
    >
      <Route element={<BasicRouting />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRouting />}>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<About />} path="/about" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Dashboard />} path="/" />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
