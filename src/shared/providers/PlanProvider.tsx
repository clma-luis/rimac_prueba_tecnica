import React, { useState } from "react";
import { CurrentPlanProps, ForWhomIsPlanProps, InitialStateProps, KeyForm, TypeDocument } from "../interfaces/usePlanInterfaces";
import { validateForm } from "../utils/validateForm";

export interface PlanProviderProps {
  state: InitialStateProps;
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleForWhomIsPlan: (value: ForWhomIsPlanProps) => void;
  handleSelectPlan: (value: CurrentPlanProps) => void;
  validateData: () => boolean;
}

export const PlanContext = React.createContext({} as PlanProviderProps);

const initialState = {
  form: {
    [KeyForm.phone]: "",
    [KeyForm.document]: "",
    [KeyForm.documentType]: TypeDocument.DNI,
    [KeyForm.privacyPolicy]: false,
    [KeyForm.commercialComm]: false,
  },
  forWhomIsPlan: {title: "", description: ""},
  currentPlan: {title: "", price: "", feature: [], recommended: ""},
};

const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<InitialStateProps>(initialState);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { privacyPolicy, commercialComm } = KeyForm;
    const { name } = e.target;

    let value: string | boolean = e.target.value;

    if (name === privacyPolicy || name === commercialComm) {
      value = (e as React.ChangeEvent<HTMLInputElement>).target.checked;
    }

    setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  const handleForWhomIsPlan = (value: ForWhomIsPlanProps) => {
    
    setState((prevState) => ({
      ...prevState,
      forWhomIsPlan: {
        ...value
      },
    }))

  };

  const handleSelectPlan = (value: CurrentPlanProps) => {
    setState((prevState) => ({
      ...prevState,
      currentPlan: {
        ...value
      }
    }));
  };

  const validateData = () => {
    const result = validateForm(state.form)?.hasErrors;
    const validateCurrentPlan = !!state.currentPlan.title && !!state.currentPlan.price;

    return result || !validateCurrentPlan
  };

  const valueContext = {
    state,
    handleValueChange,
    handleForWhomIsPlan,
    handleSelectPlan,
    validateData
  };

  return <PlanContext.Provider value={valueContext}>{children}</PlanContext.Provider>;
};

export default PlanProvider;
