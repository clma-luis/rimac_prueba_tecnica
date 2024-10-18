import { useState } from "react";
import "./stepperStyles.scss";
import ArrowBackIcon from "../../shared/icons/ArrowBackIcon";

interface StepperProps {
  steps?: { number: number; label: string }[];
}

const defaultData = [
  { number: 1, label: "Planes y coberturas" },
  { number: 2, label: "Resumen" },
];

const Stepper: React.FC<StepperProps> = (props) => {
  const { steps = defaultData } = props;
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <StepperResponsive steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />

      <div className="stepper">
        {steps.map((step, index) => (
          <div key={step.number} className="stepper__step" onClick={() => setCurrentStep(step.number)}>
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
  setCurrentStep: (step: number) => void;
  steps: { number: number; label: string }[];
}

const StepperResponsive: React.FC<StepperResponsiveProps> = (props) => {
  const { steps, currentStep, setCurrentStep } = props;
  const totalSteps = steps.length;

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepperResponsive">
      <button className="stepperResponsive__back" onClick={handleBack}>
        <ArrowBackIcon
        />
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
