import { Package, Leaf, Truck, Award } from "lucide-react";

const features = [
  { icon: Package, title: "Wide Range", description: "Bags, food boxes, gift packaging and more for every business need" },
  { icon: Leaf, title: "Eco-Friendly", description: "Sustainable bagasse and biodegradable solutions for a greener future" },
  { icon: Truck, title: "Fast Delivery", description: "Reliable UK-wide delivery with bulk order discounts available" },
  { icon: Award, title: "Premium Quality", description: "Food-safe, durable materials with custom branding options" },
];

const industries = ["Pharmaceutical", "Food & Beverage", "Retail & FMCG", "E-commerce"];

const About = () => (
  <section id="about" className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      {/* Editorial intro */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
        <div>
          <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-6">
            About Star Packaging
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6">
            Getting to Know Us and Our Vision for Packaging
          </h2>
          <div className="w-16 h-[1px] bg-accent mb-8" />
          <p className="font-body text-muted-foreground leading-[1.8] text-[15px]">
            Star Packaging is a leading supplier of premium packaging solutions in the UK.
            From pharmacy bags to eco-friendly containers, we deliver quality products
            that protect your goods and elevate your brand. Building genuine partnerships
            with our clients is at the heart of everything we do. We take the time to
            understand your needs, your industry, and your customers — so every product
            we provide feels right.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <f.icon className="w-6 h-6 text-accent mb-4 stroke-[1.5]" />
              <h3 className="font-heading text-lg text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div className="text-center">
        <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-4">
          Industries We Serve
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {industries.map((ind) => (
            <span
              key={ind}
              className="font-body text-[11px] uppercase tracking-editorial text-foreground border border-border px-8 py-3 hover:border-accent/40 hover:text-accent transition-colors duration-300"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
