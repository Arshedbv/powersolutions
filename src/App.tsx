import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import { CompanyPage } from "./pages/CompanyPage";
import { ProductPage } from "./pages/ProductPage";
import { useTheme } from "./hooks/useTheme";
import { AllProducts } from "./components/AllProducts";
import { ProductDetail } from "./pages/ProductDetail";
import { WhatsAppWidget } from "./components/WhatsAppWidget";

function App() {
  const location = useLocation();
  const { isDark } = useTheme();

  return (
    <div
      className={`transition-colors duration-300 ${isDark
          ? "bg-[#060e1a] text-white"
          : "bg-white text-slate-900"
        }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/company/:id"
            element={<CompanyPage />}
          />
          <Route
            path="/company/:id/product/:productId"
            element={<ProductPage />}
          />
          <Route path="/products" element={<AllProducts isDark={isDark} />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </AnimatePresence>
      <WhatsAppWidget isDark={isDark} />
    </div>
  );
}

export default App;