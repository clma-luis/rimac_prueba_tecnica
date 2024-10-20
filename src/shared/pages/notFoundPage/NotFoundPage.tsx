import React from "react";
import { Link } from "react-router-dom";
import "./notFoundStyles.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 - Page Not Found</h1>
      <p className="not-found__message">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="not-found__link">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
