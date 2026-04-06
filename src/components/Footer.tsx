import { Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-background">
    <div className="container mx-auto px-6 lg:px-12 py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src="https://i.ibb.co/r2Rt6TGW/STAR.png" alt="Star Packaging" className="h-12 w-auto mb-6 brightness-200" />
          <p className="font-body text-sm text-background/50 leading-relaxed">
            Premium packaging solutions for businesses across the UK.
          </p>
        </div>

        <div>
          <h4 className="font-body text-[10px] uppercase tracking-editorial text-background/40 mb-6">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            {["Home", "About", "Products", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-body text-sm text-background/60 hover:text-background transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-body text-[10px] uppercase tracking-editorial text-background/40 mb-6">Categories</h4>
          <nav className="flex flex-col gap-3">
            {["Bags Collection", "Food Packaging", "Gift Boxes", "Eco-Friendly"].map((c) => (
              <span key={c} className="font-body text-sm text-background/60">{c}</span>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-body text-[10px] uppercase tracking-editorial text-background/40 mb-6">Get in Touch</h4>
          <div className="space-y-3">
            <a href="tel:+447456519238" className="flex items-center gap-3 font-body text-sm text-background/60 hover:text-background transition-colors">
              <Phone className="w-4 h-4 shrink-0 stroke-[1.5]" /> +44 7456 519238
            </a>
            <a href="mailto:starpackaging.bm@gmail.com" className="flex items-center gap-3 font-body text-sm text-background/60 hover:text-background transition-colors">
              <Mail className="w-4 h-4 shrink-0 stroke-[1.5]" /> starpackaging.bm@gmail.com
            </a>
            <a href="https://www.starpackaging.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-sm text-background/60 hover:text-background transition-colors">
              <Globe className="w-4 h-4 shrink-0 stroke-[1.5]" /> www.starpackaging.com
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container mx-auto px-6 lg:px-12 py-5">
        <p className="font-body text-[10px] text-center text-background/30 uppercase tracking-editorial">
          © {new Date().getFullYear()} Star Packaging. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
