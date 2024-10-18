import Stepper from "../../components/stepper/Stepper";

const QuotationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Stepper />
      {children} {/* Aquí se renderizan las rutas */}
    </div>
  );
};

export default QuotationLayout;
