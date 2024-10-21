export interface DataQuotationProps {
  title: string;
  description: string;
  icon: () => JSX.Element;
}

export interface DataPlanProps {
  title: string;
  price: string;
  feature: JSX.Element[];
  icon: () => JSX.Element;
  recommended?: string;
}

export interface ForWhomIsPlanProps extends Omit<DataQuotationProps, "icon"> {}
