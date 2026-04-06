import { Lightbulb, Target, Eye, Factory } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Continuously developing smarter, more effective packaging solutions for evolving industries" },
  { icon: Target, title: "Reliability", description: "Consistent quality and on-time delivery that businesses across the UK depend on every day" },
  { icon: Eye, title: "Sustainability", description: "Leading the way with eco-friendly innovations that reduce environmental impact at scale" },
  { icon: Factory, title: "Infrastructure", description: "Modern facility with advanced printing, cutting technology and scalable production capacity" },
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
            Our Story
          </h2>
          <div className="w-16 h-[1px] bg-accent mb-8" />

          {/* Company Story */}
          <p className="font-body text-muted-foreground leading-[1.8] text-[15px] mb-8">
            Founded with a vision to revolutionize product packaging, Star Packaging has evolved
            into a comprehensive solution provider across pharmaceutical, food service, retail,
            and gifting sectors. Building genuine partnerships with our clients is at the heart
            of everything we do — we take the time to understand your needs, your industry, and
            your customers.
          </p>

          {/* Mission & Vision stacked */}
          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-5">
              <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-1">
                Mission
              </p>
              <p className="font-body text-[15px] text-foreground leading-[1.7]">
                To be the most trusted packaging partner by delivering innovative, reliable,
                and sustainable solutions.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-1">
                Vision
              </p>
              <p className="font-body text-[15px] text-foreground leading-[1.7]">
                To lead the packaging industry through eco-friendly innovations and
                unmatched quality standards.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values & Infrastructure grid */}
        <div className="grid grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="group p-6 border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <v.icon className="w-6 h-6 text-accent mb-4 stroke-[1.5]" />
              <h3 className="font-heading text-lg text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{v.description}</p>
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