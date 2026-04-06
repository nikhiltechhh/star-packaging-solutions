import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Choose from "@/components/Choose";
import Who from "@/components/Who";
import Certifications from "@/components/Certifications";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/context/CartContext";

const Index = () => (
  <CartProvider>
    <Header />
    <main>
      <Hero />
      <About />
      <Products />
      <Who />
      <Choose />
      <Certifications />
      <Contact />
    </main>
    <Footer />
    <CartSidebar />
  </CartProvider>
);

export default Index;
