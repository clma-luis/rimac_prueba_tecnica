import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/Header";
import HomePage from "./modules/homeModule/HomePage";
import QuotationRoutes from "./modules/quotationModule/quotationRoutes";

function App() {


  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotation" element={<QuotationRoutes />} />
      </Routes>
    </Router>
  )
}

export default App
