import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../../Pages/LoginPage";
import BrowsePage from "../../Pages/BrowsePage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/browse",
    element: (
      <ProtectedRoute>
        <BrowsePage />
      </ProtectedRoute>
    ),
  },
]);
