import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/appLayout/AppLayout";
import Header from "./components/header/Header";
import StepperLayout from "./components/stepperLayout/StepperLayout";
import HomePage from "./modules/homeModule/pages/HomePage";
import PlanRoutes from "./modules/planModule/PlanRoutes";
import NotFoundPage from "./shared/pages/NotFoundPage";

function App() {
  return (
    <Router>
      <AppLayout>
        <Header />
        <StepperLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plan" element={<PlanRoutes />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </StepperLayout>
      </AppLayout>
    </Router>
  );
}

export default App;
