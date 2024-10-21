import { DataPlanProps, DataQuotationProps } from "../../modules/planModule/config/config";

export interface FormProps {
  phone: string;
  document: string;
  documentType: string;
  privacyPolicy: boolean;
  commercialComm: boolean;
}

export interface ForWhomIsPlanProps extends Omit<DataQuotationProps, "icon"> {}

export interface CurrentPlanProps extends Omit<DataPlanProps, "icon"> {}

export interface InitialStateProps {
  form: FormProps;
  forWhomIsPlan: ForWhomIsPlanProps;
  currentPlan: CurrentPlanProps;
}

export enum KeyForm {
  phone = "phone",
  document = "document",
  documentType = "documentType",
  privacyPolicy = "privacyPolicy",
  commercialComm = "commercialComm",
}

export enum TypeDocument {
  DNI = "DNI",
  CE = "CE",
}
