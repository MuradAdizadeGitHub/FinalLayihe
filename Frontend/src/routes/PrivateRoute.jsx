import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthProvider";

function PrivateRoute() {
  const { token } = useContext(AuthContext);
  return token ? <Outlet /> : <Navigate to={"/login"}></Navigate>;
}

export default PrivateRoute;
