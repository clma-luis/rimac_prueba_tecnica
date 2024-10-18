import { Route, Routes } from "react-router-dom";
import QuotationPage from "./pages/quotationPage/QuotationPage";
import SuccessPage from "./pages/successPage/SuccessPage";

function QuotationRoutes() {
  return (
 
      <Routes>
        <Route path="/" element={<QuotationPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
  
  );
}

export default QuotationRoutes;
