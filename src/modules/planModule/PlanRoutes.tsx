import { Route, Routes } from "react-router-dom";
import PlanPage from "./pages/planPage/PlanPage";
import SuccessPage from "./pages/summaryPage/SummaryPage";

function PlanRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PlanPage />} />
      <Route path="/summary" element={<SuccessPage />} />
    </Routes>
  );
}

export default PlanRoutes;
