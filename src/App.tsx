import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

;

import HomePage from "./modules/homeModule/pages/HomePage";
import PlanPage from "./modules/planModule/pages/planPage/PlanPage";
import SummaryPage from "./modules/planModule/pages/summaryPage/SummaryPage";
import AppLayout from "./shared/layouts/appLayout/AppLayout";
import HeaderNavigateLayout from "./shared/layouts/HeaderNavigateLayout";
import StepperLayout from "./shared/layouts/StepperLayout";
import NotFoundPage from "./shared/pages/notFoundPage/NotFoundPage";
import PlanProvider from "./shared/providers/PlanProvider";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <PlanProvider>
        <AppLayout>
          <Header />
          <StepperLayout>
            <HeaderNavigateLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plan" element={<PlanPage />} />
                <Route path="/summary" element={<SummaryPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </HeaderNavigateLayout>
          </StepperLayout>
        </AppLayout>
      </PlanProvider>
    </Router>
  );
}

export default App;
