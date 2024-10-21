import { useContext } from "react";
import { PlanContext } from "../providers/PlanProvider";

const usePlan = () => {
  const { state, handleValueChange, handleForWhomIsPlan, handleSelectPlan, validateData, currentStep, updateStepper } = useContext(PlanContext);
  return { state, handleValueChange, handleForWhomIsPlan, handleSelectPlan, validateData,currentStep, updateStepper };
};

export default usePlan;
