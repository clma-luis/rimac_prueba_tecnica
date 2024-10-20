import { DataQuotationProps } from "../../../modules/planModule/config/config";
import ButtonCheck from "../buttonCheck/buttonCheck";
import "./cardStyles.scss";

const Card: React.FC<DataQuotationProps> = (props) => {
  const { title, description, icon } = props;
  const IconComponent = icon;

  return (
    <div className="card">
      <div className="card__btncheck-container">
        <ButtonCheck checked={false} onClick={() => {}} />
      </div>
      <div className="card__icon-container">
        <IconComponent />
        <h2 className="card__title mobile">{title}</h2>
      </div>

      <div className="card__text-container">
        <h2 className="card__title desktop">{title}</h2>
        <p className="card__text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
