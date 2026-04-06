import { BadgeCheck, Palette, Leaf, Zap } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Premium materials, rigorous testing, and a flawless finish on every order we deliver.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Tailored packaging solutions crafted to reflect your brand identity at every touchpoint.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable materials and fully recyclable options for a greener, more responsible future.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient production processes designed to meet your deadlines without compromising quality.",
  },
];

const Choose = () => (
  <section id="why-choose-us" className="py-24 lg:py-32 border-t border-border">
    <div className="container mx-auto px-6 lg:px-12">

      {/* Header */}
      <div className="mb-16">
        <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-6">
          Why Choose Us
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6">
          The Star Packaging Difference
        </h2>
        <div className="w-16 h-[1px] bg-accent" />
      </div>

      {/* 4-column grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-border">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            className="group p-8 lg:p-10 border-border hover:bg-accent/[0.03] transition-colors duration-300"
            style={{ borderRight: i < reasons.length - 1 ? undefined : "none" }}
          >
            <r.icon className="w-6 h-6 text-accent mb-6 stroke-[1.5]" />
            <div className="w-8 h-[1px] bg-accent/30 mb-6" />
            <h3 className="font-heading text-lg text-foreground mb-3 leading-snug">
              {r.title}
            </h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              {r.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Choose;