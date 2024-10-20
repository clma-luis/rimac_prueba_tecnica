import React from "react";
import { UsersIcon } from "../../../../shared/icons/UsersIcon";
import "./summaryStyles.scss";

const SummaryPage: React.FC = () => {
  return (
    <section className="summary">
      <div className="summary__container">
        <section className="summary__page-header">
          <h1>Resumen del seguro</h1>
        </section>

        <section className="summary__card">
          <p className="summary__card-info">Precios calculados para:</p>
          <div className="summary__card-user-name">
            <UsersIcon />
            <p className="summary__card-user-name-text">Rocio Miranda Díaz</p>
          </div>
          <div className="summary__divider" />

          <div className="summary__card-responsible">
            <p className="summary__card-responsible-title">Responsable de pago</p>
            <p className="summary__card-responsible-info">Celular: 5130216147</p>
            <p className="summary__card-responsible-info">DNI: 444888888</p>
          </div>
          <div className="summary__card-responsible summary__card-responsible--plan">
            <p className="summary__card-responsible-title">Plan elegido</p>
            <p className="summary__card-responsible-info">Plan en Casa y Clinica</p>
            <p className="summary__card-responsible-info">Costo del Plan: $99 al mes</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SummaryPage;
