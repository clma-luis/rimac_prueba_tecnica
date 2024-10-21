import React from "react";
import { Link } from "react-router-dom";
import "./notFoundStyles.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 - Página no encontrada</h1>
      <p className="not-found__message">Oops! La página que estás buscando no existe.</p>
      <Link to="/" className="not-found__link">Volver al inicio</Link>
    </div>
  );
};

export default NotFoundPage;
