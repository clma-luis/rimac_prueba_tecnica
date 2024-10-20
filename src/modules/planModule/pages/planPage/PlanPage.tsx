import Card from "../../../../components/ui/card/Card";
import "./planStyles.scss";

const PlanPage = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        paddingTop: "60px",
      }}
    >
      <div style={{ maxWidth: "1200px" }}>
        <div style={{ fontWeight: "700" }}>
          <h1 style={{ fontSize: "40px", marginBottom: "0", maxWidth: "350px", margin: "0 auto" }}>Rocío ¿Para quién deseas cotizar?</h1>
          <p style={{ marginTop: "8px" }}>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>
      </div>
      <Card/>
    </section>
  );
};

export default PlanPage;
