import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Index from "./pages/Index.tsx";
import Technology from "./pages/Technology.tsx";
import Certification from "./pages/Certification.tsx";
import NotFound from "./pages/NotFound.tsx";
import { CartProvider } from "./context/CartContext.tsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </CartProvider>
);

export default App;