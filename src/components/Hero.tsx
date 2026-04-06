import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Premium Packaging\nSolutions",
    subtitle: "Quality bags, boxes & eco-friendly packaging for every industry",
  },
  {
    image: hero2,
    title: "Eco-Friendly &\nSustainable",
    subtitle: "Biodegradable bagasse products and recyclable packaging options",
  },
  {
    image: hero3,
    title: "Gift & Specialty\nPackaging",
    subtitle: "Luxury boxes and decorative packaging for unforgettable impressions",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) =>
    setCurrent((p) => (p + dir + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
      ))}

      <div className="relative z-10 h-full container mx-auto px-6 lg:px-12 flex items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-[1.1] whitespace-pre-line mb-8 animate-fade-up">
            {slides[current].title}
          </h1>
          <p className="font-body text-sm sm:text-base text-primary-foreground/75 mb-10 max-w-xl mx-auto tracking-wide leading-relaxed">
            {slides[current].subtitle}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#products"
              className="inline-flex items-center bg-primary-foreground text-foreground px-10 py-3.5 font-body font-medium text-[11px] uppercase tracking-editorial hover:bg-primary-foreground/90 transition-colors"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center border border-primary-foreground/40 text-primary-foreground px-10 py-3.5 font-body font-medium text-[11px] uppercase tracking-editorial hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 stroke-[1]" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 stroke-[1]" />
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-6 lg:right-12 z-10 flex flex-col items-end gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`font-body text-xs transition-all duration-300 ${
              i === current
                ? "text-primary-foreground"
                : "text-primary-foreground/30 hover:text-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          >
            0{i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
