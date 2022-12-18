import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext, useNavigate } from "../Contexts/AuthContext";

function PrivateRoute({ children }) {
  const { isAuth ,token1 } = useContext(AuthContext);
  // const navigate = useNavigate();

  if (token1 === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

export default PrivateRoute;
