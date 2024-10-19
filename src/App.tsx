import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/appLayout/AppLayout";
import Header from "./components/header/Header";
import HomePage from "./modules/homeModule/HomePage";
import QuotationRoutes from "./modules/quotationModule/quotationRoutes";

function App() {
  return (
    <Router>
      <AppLayout>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quotation" element={<QuotationRoutes />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
