import React from "react";
import { createBrowserRouter } from "react-router-dom";

import BrowsePage from "../../Pages/BrowsePage";
import LoginPage from "../../Pages/LoginPage";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/browse",
    element: <BrowsePage />,
  },
]);
