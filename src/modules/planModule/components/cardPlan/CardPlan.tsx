import React from "react";
import "./cardPlanStyles.scss";
import { DataPlanProps } from "../../config/config";

const CardPlan: React.FC<DataPlanProps> = (props) => {
  const { feature, title, price, recommended, icon } = props;
  const IconComponent = icon;
  
  return (
    <div className="card-plan">
      <div className="card-plan__content">
        <div className="card-plan__header">
          {recommended && <span className="card-plan__tag">{recommended}</span>}
        </div>

        <div className="card-plan__title-container">
          <h2 className="card-plan__title">{title}</h2>
          <IconComponent />
        </div>

        <div className="card-plan__price-container">
          <h4 className="card-plan__price-label">Costo del plan</h4>
          <p className="card-plan__price">{price}</p>
        </div>

        <div className="card-plan__divider" />

        <div className="card-plan__features">
          <ul>
            {feature.map((item, index) => (
              <li key={index} className="card-plan__feature-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className="card-plan__button">Seleccionar Plan</button>
    </div>
  );
};

export default CardPlan;