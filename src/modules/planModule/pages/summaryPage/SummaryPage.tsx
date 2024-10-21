import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePlan from "../../../../shared/hooks/usePlan";
import { UsersIcon } from "../../../../shared/icons/UsersIcon";
import { RoutesPath } from "../../../constants/routes";
import "./summaryStyles.scss";

const SummaryPage: React.FC = () => {
  const { state, validateData, updateStepper } = usePlan();
  const navigation = useNavigate();

  useEffect(() => {
    executeValidation();
    updateStepper(2);
  }, []);

  const executeValidation = () => {
    if (validateData(true)) {
      navigation(RoutesPath.HOME);
    }
  };

  return (
    <section className="summary">
      <div className="summary__container">
        <section className="summary__page-header">
          <h1 style={{ margin: "0px" }}>Resumen del seguro</h1>
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
            <p className="summary__card-responsible-info">Celular: {state.form.phone}</p>
            <p className="summary__card-responsible-info">
              {state.form.documentType}: {state.form.document}
            </p>
          </div>
          <div className="summary__card-responsible summary__card-responsible--plan">
            <p className="summary__card-responsible-title">Plan elegido</p>
            <p className="summary__card-responsible-info">{state.currentPlan.title}</p>
            <p className="summary__card-responsible-info">Costo del Plan: {state.currentPlan.price}</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SummaryPage;
