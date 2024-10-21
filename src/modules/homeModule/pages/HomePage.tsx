import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeImageDesktop from "../../../assets/homeImgDesktop.png";


import Checkbox from "../../../components/ui/checkbox/Checkbox";
import Input from "../../../components/ui/input/Input";
import usePlan from "../../../shared/hooks/usePlan";
import { InitialStateProps, KeyForm, TypeDocument } from "../../../shared/interfaces/usePlanInterfaces";
import { ErrorsType, validateForm } from "../../../shared/utils/validateForm";
import { RoutesPath } from "../../constants/routes";
import "./homeStyles.scss";
import SelectInput from "@/components/selectInput/SelectInput";
import Footer from "../components/footer/Footer";


const HomePage = () => {
  const navigation = useNavigate();
  const { state, handleValueChange } = usePlan();
  const { commercialComm, document, documentType, phone, privacyPolicy } = (state as InitialStateProps).form;
  const [error, setError] = useState({} as ErrorsType);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({});

    const result = validateForm(state.form);

    if (result?.hasErrors) {
      setError(result?.errors);
      return;
    }

    navigation(RoutesPath.PLAN);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="home">
        <div className="home__container">
          <div className="home__image-section">
            <img src={HomeImageDesktop} width="540" alt="Family" className="family-image" />
          </div>

          <div className="home__content-section">
            <div className="home__text-section">
              <div className="text-title">
                <span className="tag">Seguro Salud Flexible</span>
                <h1>Creado para ti y tu familia</h1>
              </div>

              <div className="home__image-section-mobile">
                <img src={HomeImageDesktop} alt="Family" className="family-image" />
              </div>
            </div>

            <div className="divider" />

            <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>

            <form onSubmit={handleSubmit} className="home__form">
              <SelectInput
                inputName={KeyForm.document}
                inputType="number"
                selectName={KeyForm.documentType}
                selectOptions={[TypeDocument.DNI, TypeDocument.CE]}
                inputOnchange={handleValueChange}
                inputValue={document}
                selectOnChange={handleValueChange}
                selectValue={documentType}
                error={!!(error.document as string)}
                errorText={error.document as string}
              />

              <Input
                label="Celular"
                name={KeyForm.phone}
                type="number"
                value={phone}
                onChange={handleValueChange}
                error={!!(error.phone as string)}
                errorText={error.phone as string}
              />

              <div className="checkbox-group">
                <Checkbox
                  name={KeyForm.privacyPolicy}
                  checked={privacyPolicy}
                  text="Acepto la Política de Privacidad"
                  setChecked={handleValueChange}
                  error={!!(error.privacyPolicy as string)}
                />

                <Checkbox
                  name={KeyForm.commercialComm}
                  checked={commercialComm}
                  text="Acepto la Política Comunicaciones Comerciales"
                  setChecked={handleValueChange}
                  error={!!(error.commercialComm as string)}
                />
              </div>

              <a href="https://www.rimac.com/politica-privacidad" className="terms">
                Aplican Términos y Condiciones.
              </a>

              <button type="submit" className="submit-button">
                Cotiza aquí
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default HomePage;
