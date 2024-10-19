import React, { useState } from "react";
import "./homeStyles.scss";
import Footer from "../../components/footer/Footer";
import HomeImageDesktop from "../../assets/homeImgDesktop.png";
import Input from "../../components/input/Input";
import Checkbox from "../../components/checkbox/Checkbox";
import SelectInput from "../../components/selectInput/SelectInput";
import HomeLayout from "../../components/appLayout/AppLayout";

const HomePage = () => {
  const [documentType, setDocumentType] = useState("DNI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [commercialComm, setCommercialComm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
   
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div className="home">
          <div className="home__container">
            <div className="home__image-section">
              <img src={HomeImageDesktop} alt="Family" className="family-image" />
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
                  selectOptions={["DNI", "CE", "TP"]}
                  inputOnchange={(e) => {
                    e;
                  }}
                  inputValue="12341234"
                  selectOnChange={(e) => setDocumentType(e)}
                  selectValue={documentType}
                />

                <Input
                  label="Celular"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => {
                    e;
                  }}
                />

                <div className="checkbox-group">
                  <Checkbox
                    checked={privacyPolicy}
                    text="Acepto la Política de Privacidad"
                    setChecked={(e) => setPrivacyPolicy(e.target.checked)}
                  />

                  <Checkbox
                    checked={commercialComm}
                    text="Acepto la Política Comunicaciones Comerciales"
                    setChecked={(e) => setCommercialComm(e.target.checked)}
                  />
                </div>

                <a className="terms">Aplican Términos y Condiciones.</a>

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
