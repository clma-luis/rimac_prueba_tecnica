import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Stepper from "../../components/ui/stepper/Stepper";
import { RoutesPath } from "../../modules/constants/routes";
import usePlan from "../hooks/usePlan";

const StepperLayout = ({ children }: { children: React.ReactNode }) => {
  const { currentStep, updateStepper } = usePlan();
  const { pathname } = useLocation();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (pathname === RoutesPath.PLAN || pathname === RoutesPath.SUMMARY) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [pathname]);

  return (
    <>
      {showComponent && <Stepper currentStep={currentStep} updateStepper={updateStepper} /> }
      {children}
    </>
  );
};

export default StepperLayout;
