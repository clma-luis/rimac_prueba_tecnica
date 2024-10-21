import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <SyncLoader />
    </div>
  );
};

export default Loader;
