import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./shared/layouts/appLayout/AppLayout";
import Header from "./components/header/Header";

import HomePage from "./modules/homeModule/pages/HomePage";
import PlanPage from "./modules/planModule/pages/planPage/PlanPage";
import SummaryPage from "./modules/planModule/pages/summaryPage/SummaryPage";
import NotFoundPage from "./shared/pages/notFoundPage/NotFoundPage";
import StepperLayout from "./shared/layouts/StepperLayout";

function App() {
  return (
    <Router>
      <AppLayout>
        <Header />
        <StepperLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </StepperLayout>
      </AppLayout>
    </Router>
  );
}

export default App;
