import React from "react";
import "./cardPlanStyles.scss";
import { DataPlanProps } from "../../config/config";
import { CurrentPlanProps } from "../../../../shared/interfaces/usePlanInterfaces";

interface CardPlanProps extends DataPlanProps {
  handleClick: (item: CurrentPlanProps) => void;
}

const CardPlan: React.FC<CardPlanProps> = (props) => {
  const { handleClick, ...restProps } = props;
  const { feature, title, price, recommended, icon } = restProps;
  const IconComponent = icon;

  const handleOnClick = (item: DataPlanProps) => {
    const { icon, ...restProps } = item;

    handleClick(restProps);
  };

  return (
    <div className="card-plan">
      <div className="card-plan__content">
        <div className="card-plan__header">{recommended && <span className="card-plan__tag">{recommended}</span>}</div>

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
              <li key={index} className="card-plan__feature-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="card-plan__button" onClick={() => handleOnClick(restProps)}>
        Seleccionar Plan
      </button>
    </div>
  );
};

export default CardPlan;
