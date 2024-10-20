import { AddUserIcon } from "../../../shared/icons/AddUserIcon";
import { HomeLightIcon } from "../../../shared/icons/HomeLightIcon";
import { HospitalLightIcon } from "../../../shared/icons/HospitalLightIcon";
import { ProtectionIcon } from "../../../shared/icons/ProtectionIcon";

export interface DataQuotationProps {
  title: string;
  description: string;
  icon: () => JSX.Element;
}

export const dataQuotation: DataQuotationProps[] = [
  {
    title: "Para mi",
    description: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    icon: () => <ProtectionIcon />,
  },
  {
    title: "Para alguien más",
    description: "Realiza una cotización para uno de tus familiares o cualquier persona.",
    icon: () => <AddUserIcon />,
  },
];

export interface DataPlanProps {
    title: string;
    price: string;
    feature: JSX.Element[]; 
    icon: () => JSX.Element;
    recommended?: string;
  }
  

export const dataPlan: DataPlanProps[] = [
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
  