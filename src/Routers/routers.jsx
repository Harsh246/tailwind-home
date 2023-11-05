import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";

import Error404 from "../pages/404";
import Login from "../pages/Login";
import ComingSoon from "../pages/ComingSoon";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path="/">
      <Route path="" element={<ErrorPage />} />

      <Route path="app" element={<Layout />}>
        <Route path="" element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="food-order" element={<ComingSoon />} />
        <Route path="manage-menu" element={<ComingSoon />} />
        <Route path="customer-review" element={<ComingSoon />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="not-found" element={<ErrorPage />} />
      <Route path="404" element={<Error404 />} />
    </Route>
  )
);
