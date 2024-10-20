import React from "react";
import "./cardPlanStyles.scss";
import { DataPlanProps } from "../../modules/planModule/config/config";

const CardPlan: React.FC<DataPlanProps> = (props) => {
  const { feature, title, price, recommended, icon } = props;
  const IconComponent = icon;
  return (
    <div
      style={{
        maxWidth: "250px",
        maxHeight: "600px",
        boxShadow: "1px 1px 20px rgba(153, 133, 133, 0.3)",
        padding: "30px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "40px",
      }}
    >
      <div>
        <div style={{ width: "100%", minHeight: "28px", display: "flex", justifyContent: "flex-start" }}>
          {recommended && <span className="tag">{recommended}</span>}
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <h2 style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "900", marginBottom: "0px", textAlign: "start" }}>{title}</h2>

          <IconComponent />
        </div>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h4 style={{ marginBottom: "0px", color: "#7981B2", marginTop: "0px" }}>Costo del plan</h4>
          <p style={{ fontSize: "20px", fontWeight: "900", lineHeight: "28px", marginBottom: "0px", marginTop: "0px" }}>{price}</p>
        </div>

        <div style={{ marginTop: "16px", marginBottom: "16px", width: "100%", border: "1px solid #D7DBF5" }} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <ul>
            {feature.map((item, index) => (
              <li key={index} style={{ fontSize: "16px", lineHeight: "28px", textAlign: "left", marginBottom: "10px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button style={{ width: "100%", backgroundColor: "#FF1C44", height: "48px", borderRadius: "32px", color: "white" }}>
        Seleccionar Plan
      </button>
    </div>
  );
};

export default CardPlan;
