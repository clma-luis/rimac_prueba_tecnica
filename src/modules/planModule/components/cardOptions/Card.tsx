import ButtonCheck from "../../../../components/ui/buttonCheck/buttonCheck";
import usePlan from "../../../../shared/hooks/usePlan";
import { ForWhomIsPlanProps } from "../../../../shared/interfaces/usePlanInterfaces";
import { DataQuotationProps } from "../../config/config";

import "./cardStyles.scss";

interface CardProps extends DataQuotationProps {
  handleClick: (item: ForWhomIsPlanProps) => void;
}

const Card: React.FC<CardProps> = (props) => {
  const { title, description, icon } = props;
  const {state} = usePlan()
  const IconComponent = icon;

  const handleOnClick = (item: DataQuotationProps) => {
    const { icon, ...rest } = item;
    props.handleClick(rest);
  };

  const handleIsChecked = () => { 
    const { forWhomIsPlan } = state

    return forWhomIsPlan.title === title
  }

  const isChecked = handleIsChecked()


  return (
    <div
      className={`card  ${isChecked ? "checked" : ""}`}
      onClick={() => {
        const { handleClick, ...rest } = props;
        handleOnClick(rest);
      }}
    >
      <div className={`card__btncheck-container`}>
        <ButtonCheck checked={isChecked} onClick={() => {}} />
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
