import { Phone, Mail, Globe, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Star Packaging" className="h-14 w-auto mb-4 brightness-200" />
          <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
            Premium packaging solutions for businesses across the UK. Quality, sustainability, and innovation in every product.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {["Home", "About", "Products", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Categories</h4>
          <nav className="flex flex-col gap-2">
            {["Bags Collection", "Food Packaging", "Gift Boxes", "Eco-Friendly"].map((c) => (
              <span key={c} className="font-body text-sm text-primary-foreground/70">{c}</span>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Get in Touch</h4>
          <div className="space-y-3">
            <a href="tel:+447456519238" className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4 shrink-0" /> +44 7456 519238
            </a>
            <a href="mailto:starpackaging.bm@gmail.com" className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4 shrink-0" /> starpackaging.bm@gmail.com
            </a>
            <a href="https://www.starpackaging.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Globe className="w-4 h-4 shrink-0" /> www.starpackaging.com
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4">
        <p className="font-body text-xs text-center text-primary-foreground/50">
          © {new Date().getFullYear()} Star Packaging. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
