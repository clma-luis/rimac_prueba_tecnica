import { useContext } from "react";
import { PlanContext } from "../providers/PlanProvider";

const usePlan = () => {
  const { state, handleValueChange, handleForWhomIsPlan, handleSelectPlan, validateData } = useContext(PlanContext);
  return { state, handleValueChange, handleForWhomIsPlan, handleSelectPlan, validateData };
};

export default usePlan;
