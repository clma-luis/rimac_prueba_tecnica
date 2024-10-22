import { AddUserIcon } from "../../../shared/icons/AddUserIcon";
import { HomeLightIcon } from "../../../shared/icons/HomeLightIcon";
import { HospitalLightIcon } from "../../../shared/icons/HospitalLightIcon";
import { ProtectionIcon } from "../../../shared/icons/ProtectionIcon";

export enum ForWhomIsPlanId {
  FOR_MYSELF = "Para mi",
  FOR_ANOTHER = "Para alguien más",
}
export interface DataQuotationProps {
  title: ForWhomIsPlanId;
  description: string;
  icon: () => JSX.Element;
}

export const dataQuotation: DataQuotationProps[] = [
  {
    title: ForWhomIsPlanId.FOR_MYSELF,
    description: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    icon: () => <ProtectionIcon />,
  },
  {
    title: ForWhomIsPlanId.FOR_ANOTHER,
    description: "Realiza una cotización para uno de tus familiares o cualquier persona.",
    icon: () => <AddUserIcon />,
  },
];

export interface DataPlanProps {
  title: string;
  before?: string;
  price: string;
  feature: JSX.Element[];
  icon: () => JSX.Element;
  recommended?: string;
}

export const forMySelfPlan: DataPlanProps[] = [
  {
    title: "Plan en Casa",
    price: "$39 al mes",
    feature: [
      <>
        <strong>Médico general a domicilio</strong> por S/20 y medicinas cubiertas al 100%.
      </>,
      <>
        <strong>Videoconsulta</strong> y orientación telefónica al 100% en medicina general + pediatría.
      </>,
      <>
        <strong>Indemnización</strong> de S/300 en caso de hospitalización por más de un día.
      </>,
    ],
    icon: () => <HomeLightIcon />,
  },
  {
    recommended: "Plan recomendado",
    title: "Plan en Casa y Clínica",
    price: "$99 al mes",
    feature: [
      <>
        <strong>Consultas en clínica</strong> para cualquier especialidad.
      </>,
      <>
        <strong>Medicinas y exámenes</strong> derivados cubiertos al 80%.
      </>,
      <>
        Atención médica en <strong>más de 200 clínicas</strong> del país.
      </>,
    ],
    icon: () => <HospitalLightIcon />,
  },
  {
    title: "Plan en Casa + Chequeo",
    price: "$49 al mes",
    feature: [
      <>
        <strong>Un Chequeo preventivo general</strong> de manera presencial o virtual.
      </>,
      <>
        Acceso a <strong>Vacunas</strong> en el Programa del MINSA en centros privados.
      </>,
      <>
        <strong>Incluye todos los beneficios del Plan en Casa</strong>.
      </>,
    ],
    icon: () => <HomeLightIcon />,
  },
];

const princeBefore: Record<number, { before: string; after: string }> = {
  0: {
    before: "$39 antes",
    after: "$37.05 antes",
  },
  1: {
    before: "$99 antes",
    after: "$94.05 antes",
  },
  2: {
    before: "$49 antes",
    after: "$46.55 antes",
  },
};

export const forAnotherPlan: DataPlanProps[] = [...forMySelfPlan].map((item, index) => ({
  ...item,
  before: princeBefore[index].before,
  price: princeBefore[index].after,
}));
