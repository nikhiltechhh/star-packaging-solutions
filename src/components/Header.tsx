import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Technology", href: "/technology" },
  { label: "Certifications", href: "/certification" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const alwaysScrolled = pathname !== "/";
  const isScrolled = alwaysScrolled || scrolled || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Smooth scroll to anchor on page load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  // Handle clicks on nav links
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      if (pathname !== "/") {
        // Navigate to home first, then scroll to section
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* Header bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="relative z-10"
            >
              <img
                src="https://i.ibb.co/r2Rt6TGW/STAR.png"
                alt="Star Packaging"
                className={`h-20 lg:h-28 w-auto transition-all duration-500 ${
                  !isScrolled ? "brightness-200" : ""
                }`}
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-body text-[11px] font-medium uppercase tracking-editorial transition-colors duration-300 ${
                    isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-5">
              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2"
                aria-label="Open cart"
              >
                <ShoppingCart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[9px] font-bold min-w-[18px] min-h-[18px] flex items-center justify-center rounded-full animate-fade-in">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative z-50 p-2"
                aria-label="Toggle menu"
              >
                <div className="w-7 h-5 relative flex flex-col justify-between">
                  <span
                    className={`block h-[1.5px] rounded-full transition-all duration-500 origin-center ${
                      mobileOpen
                        ? "rotate-45 translate-y-[9.5px] bg-foreground"
                        : isScrolled
                        ? "bg-foreground"
                        : "bg-primary-foreground"
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] rounded-full transition-all duration-500 w-4 self-center ${
                      mobileOpen
                        ? "opacity-0 scale-0 bg-foreground"
                        : isScrolled
                        ? "bg-foreground"
                        : "bg-primary-foreground"
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] rounded-full transition-all duration-500 origin-center ${
                      mobileOpen
                        ? "-rotate-45 -translate-y-[9.5px] bg-foreground"
                        : isScrolled
                        ? "bg-foreground"
                        : "bg-primary-foreground"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-xs font-medium text-foreground uppercase tracking-editorial hover:text-accent transition-colors"
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms, color 0.2s`,
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;