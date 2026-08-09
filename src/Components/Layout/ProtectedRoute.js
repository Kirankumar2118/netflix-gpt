import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

export default ProtectedRoute;
