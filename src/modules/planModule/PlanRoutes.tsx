import { Route, Routes } from "react-router-dom";
import PlanPage from "./pages/planPage/PlanPage";
import SuccessPage from "./pages/successPage/SuccessPage";

function PlanRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PlanPage />} />
      <Route path="/summary" element={<SuccessPage />} />
    </Routes>
  );
}

export default PlanRoutes;
