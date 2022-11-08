import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="3rem" />
      <h1 className="fs-1">404</h1>
      <p className="lead text-uppercase">Page Not Found</p>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
