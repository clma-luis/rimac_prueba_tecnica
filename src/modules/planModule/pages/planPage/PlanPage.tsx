import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../components/loader/Loader";
import usePlan from "../../../../shared/hooks/usePlan";
import { CurrentPlanProps, ForWhomIsPlanProps } from "../../../../shared/interfaces/usePlanInterfaces";
import { scrollTop } from "../../../../shared/utils";
import { RoutesPath } from "../../../constants/routes";
import Card from "../../components/cardOptions/Card";
import CardPlan from "../../components/cardPlan/CardPlan";
import { dataQuotation, forAnotherPlan, forMySelfPlan, ForWhomIsPlanId } from "../../config/config";
import "./planStyles.scss";

const PlanPage = () => {
  const navigation = useNavigate();
  const { state, handleForWhomIsPlan, handleSelectPlan, validateData, updateStepper } = usePlan();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    executeValidation();
    updateStepper(1);
    scrollTop();
  }, []);
  

  const executeValidation = () => {
    if (validateData(false)) {
      navigation(RoutesPath.HOME);
      return;
    }
    setIsLoading(false);
  };

  const showCurrentPlanOptions = () => {
    const option = {
      [ForWhomIsPlanId.FOR_MYSELF]: forMySelfPlan,
      [ForWhomIsPlanId.FOR_ANOTHER]: forAnotherPlan,
    };

    const result = option[state.forWhomIsPlan.title];

    return result || [];
  };

  const handleForWhom = (item: ForWhomIsPlanProps) => {
    handleForWhomIsPlan(item);
  };

  const handleClickPlan = (item: CurrentPlanProps) => {
    handleSelectPlan(item);

    navigation(RoutesPath.SUMMARY);
  };

  const validateIfExisForWhomPlan = () => {
    const { title, description } = state.forWhomIsPlan;

    return title && description;
  };

  const currentPlans = showCurrentPlanOptions();
  console.log({ currentPlans });

  if (isLoading) return <Loader />;

  return (
    <section className="plan-page-section">
      <div className="plan-page-container">
        <div className="plan-page-header">
          <h1>Rocío ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>

        <div className="plan-page-quotation">
          {dataQuotation.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} icon={item.icon} handleClick={handleForWhom} />
          ))}
        </div>

        {validateIfExisForWhomPlan() && (
          <div className="plan-page-plans">
            <div className="plan-page-plans-container">
              {currentPlans.map((item, index) => (
                <CardPlan
                  key={index}
                  title={item.title}
                  before={item?.before}
                  price={item.price}
                  feature={item.feature}
                  recommended={item.recommended}
                  icon={item.icon}
                  handleClick={handleClickPlan}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanPage;
