import { FormProps } from "../interfaces/usePlanInterfaces";

export type ErrorsType = { [key: string]: string | boolean };
export interface ValidateFormResponse {
  errors: ErrorsType;
  hasErrors: boolean;
}
export const validateForm = (form: FormProps): ValidateFormResponse | null => {
  const { phone, document, documentType, privacyPolicy, commercialComm } = form;

  const errors: ErrorsType = {
    phone: "",
    document: "",
    documentType: "",
    privacyPolicy: false,
    commercialComm: false,
  };

  const isPhoneValid = /^\d{9}$/.test(phone);
  if (!isPhoneValid) {
    errors.phone = "El número de teléfono debe tener exactamente 9 dígitos.";
  }

  const isDocumentValid = /^\d{8,10}$/.test(document);
  if (!isDocumentValid) {
    errors.document = "El documento debe tener entre 8 y 10 dígitos.";
  }

  const validDocumentTypes = ["DNI", "CE"];
  if (!validDocumentTypes.includes(documentType)) {
    errors.documentType = "El tipo de documento debe ser 'DNI' o 'CE'.";
  }

  if (privacyPolicy !== true) {
    errors.privacyPolicy = true;
  }

  if (commercialComm !== true) {
    errors.commercialComm = true;
  }

  // Mejorar la verificación de hasErrors
  const hasErrors = Object.values(errors).some((error) => {
    // Consideramos un error si es un string no vacío o un booleano que es `true`
    return (typeof error === "string" && error !== "") || (typeof error === "boolean" && error === true);
  });
  const result = { errors, hasErrors };
  return hasErrors ? (result as ValidateFormResponse) : null;
};
