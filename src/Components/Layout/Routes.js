import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../../Pages/LoginPage";
import BrowsePage from "../../Pages/BrowsePage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Explorer from "../../Pages/Explorer";
import SearchResult from "../../Pages/SearchResult";
import Details from "../../Pages/Details ";
import GptSearch from "../../Pages/GptSearch";

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

  {
    path: "/explorer/:mediaType",
    element: (
      <ProtectedRoute>
        <Explorer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/search/:query",
    element: (
      <ProtectedRoute>
        <SearchResult />
      </ProtectedRoute>
    ),
  },
  {
    path: "/:mediaType/:id",
    element: (
      <ProtectedRoute>
        <Details />
      </ProtectedRoute>
    ),
  },
  {
    path: "/GPTsearch",
    element: (
      <ProtectedRoute>
        <GptSearch />
      </ProtectedRoute>
    ),
  },
]);
