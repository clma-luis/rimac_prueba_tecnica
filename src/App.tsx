import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./modules/homeModule/pages/HomePage";
import PlanPage from "./modules/planModule/pages/planPage/PlanPage";
import SummaryPage from "./modules/planModule/pages/summaryPage/SummaryPage";
import AppLayout from "./shared/layouts/appLayout/AppLayout";
import HeaderLayout from "./shared/layouts/HeaderLayout";
import HeaderNavigateLayout from "./shared/layouts/HeaderNavigateLayout";
import StepperLayout from "./shared/layouts/StepperLayout";
import NotFoundPage from "./shared/pages/notFoundPage/NotFoundPage";
import PlanProvider from "./shared/providers/PlanProvider";

function App() {
  return (
    <Router>
      <PlanProvider>
        <AppLayout>
          <HeaderLayout>
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
          </HeaderLayout>
        </AppLayout>
      </PlanProvider>
    </Router>
  );
}

export default App;
