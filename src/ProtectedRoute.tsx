import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token: string | null = sessionStorage.getItem("token");

  const location = useLocation();
  console.log(location);
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} state={{ from: location }} />
  );
};

export default ProtectedRoute;
