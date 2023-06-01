import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../../Pages/SharePage/Loading/Loading";

const NormalUserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isUser, isUserLoading] = useUser(user?.email);
  const location = useLocation();

  if (loading || isUserLoading) {
    return <Loading></Loading>;
  }

  if (user && isUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default NormalUserRoute;
