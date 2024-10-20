import Card from "../../components/cardOptions/Card";
import CardPlan from "../../components/cardPlan/CardPlan";
import { dataPlan, dataQuotation } from "../../config/config";
import "./planStyles.scss";

const PlanPage = () => {
  return (
    <section className="plan-page-section">
      <div className="plan-page-container">
        <div className="plan-page-header">
          <h1>Rocío ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>

        <div className="plan-page-quotation">
          {dataQuotation.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>

        <div className="plan-page-plans">
          <div className="plan-page-plans-container">
            {dataPlan.map((item, index) => (
              <CardPlan
                key={index}
                title={item.title}
                price={item.price}
                feature={item.feature}
                recommended={item.recommended}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanPage;
