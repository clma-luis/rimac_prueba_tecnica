import { RoutesPath } from "@/modules/constants/routes";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "../../../shared/icons/ArrowBackIcon";
import "./stepperStyles.scss";

interface StepperProps {
  currentStep: number;
  updateStepper: (step: number) => void;
  steps?: { number: number; label: string; active: boolean }[];
}

const defaultData = [
  { number: 1, label: "Planes y coberturas" },
  { number: 2, label: "Resumen" },
];

const Stepper: React.FC<StepperProps> = (props) => {
  const { steps = defaultData, currentStep, updateStepper } = props;

  return (
    <>
      <StepperResponsive steps={steps} currentStep={currentStep} />

      <div className="stepper">
        {steps.map((step, index) => (
          <div key={step.number} className="stepper__step" onClick={() => updateStepper(step.number)}>
            <div className={`stepper__number ${currentStep !== step.number ? "stepper__number--inactive" : ""}`}>{step.number}</div>
            <div className={`stepper__label ${currentStep !== step.number ? "stepper__label--inactive" : ""}`}>{step.label}</div>
            {index < steps.length - 1 && <div className="stepper__divider" />}
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;

interface StepperResponsiveProps {
  currentStep: number;
  steps: { number: number; label: string }[];
}

const StepperResponsive: React.FC<StepperResponsiveProps> = (props) => {
  const navigation = useNavigate();
  const { steps, currentStep } = props;
  const totalSteps = steps.length;

  const handleBack = () => {
    const navigateTo: { [key: number]: string } = {
      1: RoutesPath.HOME,
      2: RoutesPath.PLAN,
    };

    const path = navigateTo[currentStep];

    navigation(path);
  };

  return (
    <div className="stepperResponsive">
      <button className="stepperResponsive__back" onClick={handleBack}>
        <ArrowBackIcon />
      </button>
      <div className="stepperResponsive__text">
        PASO {currentStep} DE {totalSteps}
      </div>
      <div className="stepperResponsive__content">
        <div className="stepperResponsive__progress-bar">
          <div className="stepperResponsive__progress-fill" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};
