import { Package, Leaf, Truck, Award } from "lucide-react";

const features = [
  { icon: Package, title: "Wide Range", description: "Bags, food boxes, gift packaging and more for every business need" },
  { icon: Leaf, title: "Eco-Friendly", description: "Sustainable bagasse and biodegradable solutions for a greener future" },
  { icon: Truck, title: "Fast Delivery", description: "Reliable UK-wide delivery with bulk order discounts available" },
  { icon: Award, title: "Premium Quality", description: "Food-safe, durable materials with custom branding options" },
];

const industries = ["Pharmaceutical", "Food & Beverage", "Retail & FMCG", "E-commerce"];

const About = () => (
  <section id="about" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          About Star Packaging
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Star Packaging is a leading supplier of premium packaging solutions in the UK.
          From pharmacy bags to eco-friendly containers, we deliver quality products
          that protect your goods and elevate your brand.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-2xl p-8 sm:p-12">
        <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6 text-center">
          Industries We Serve
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl py-4 px-6 text-center border border-primary-foreground/20"
            >
              <span className="font-body font-semibold text-primary-foreground">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
