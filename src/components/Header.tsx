import { useState } from "react";
import { ShoppingCart, Menu, X, Phone, Mail } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center text-primary-foreground text-xs font-body">
          <div className="flex items-center gap-4">
            <a href="tel:+447456519238" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" /> +44 7456 519238
            </a>
            <a href="mailto:starpackaging.bm@gmail.com" className="hidden sm:flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3" /> starpackaging.bm@gmail.com
            </a>
          </div>
          <a href="https://www.starpackaging.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            www.starpackaging.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Star Packaging" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Cart button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                {totalItems}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 w-3/5 mx-auto ${
                  mobileOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 pb-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
