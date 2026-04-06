import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/context/CartContext";

const Index = () => (
  <CartProvider>
    <Header />
    <main>
      <Hero />
      <About />
      <Products />
    </main>
    <Footer />
    <CartSidebar />
  </CartProvider>
);

export default Index;
