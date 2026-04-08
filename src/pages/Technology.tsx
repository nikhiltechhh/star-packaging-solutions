"use client";

import { useEffect, useRef, useState } from "react";

const machines = [
  {
    id: 1,
    label: "01",
    title: "Printing Machines",
    description:
      "High-precision multicolor printing presses engineered for exceptional color accuracy and consistency across every run — delivering vivid, publication-quality results at production scale.",
    src: "https://i.ibb.co/F4rgGSXw/Whats-App-Image-2026-04-05-at-11-12-43-AM-3.jpg",
    alt: "Printing machine",
    specs: ["Multi-color offset", "High-speed output", "Precision registration"],
  },
  {
    id: 2,
    label: "02",
    title: "Bobst Machine",
    description:
      "The BOBST Machine delivers unmatched precision in cutting and creasing — ensuring clean, accurate blanks across folding carton and pharmaceutical packaging applications.",
    src: "https://i.ibb.co/nqzry0z4/Whats-App-Image-2026-04-05-at-11-12-43-AM.jpg",
    alt: "Bobst die cutting machine",
    specs: ["Autoplaten® technology", "Auto-stripping & blanking", "High-volume throughput"],
  },
];

/* ── Reusable scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ── Alternating machine row ── */
function MachineRow({
  machine,
  index,
}: {
  machine: (typeof machines)[0];
  index: number;
}) {
  const { ref, visible } = useReveal(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="machine-row"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(56px)",
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 100}ms,
                     transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="machine-image-wrap" style={{ order: isEven ? 0 : 1 }}>
        <img src={machine.src} alt={machine.alt} className="machine-img" />
        <span className="machine-label">{machine.label}</span>
      </div>

      {/* Text */}
      <div className="machine-text" style={{ order: isEven ? 1 : 0 }}>
        <div className="machine-eyebrow-line" />
        <h3 className="font-heading text-2xl sm:text-3xl text-foreground leading-tight mb-4">
          {machine.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          {machine.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {machine.specs.map((spec) => (
            <span key={spec} className="spec-pill">
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main exported section ── */
const Machinery = () => {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);

  return (
    <>
      <style>{`
        .machine-row {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        @media (min-width: 768px) {
          .machine-row {
            display: flex;
            flex-direction: row;
            align-items: stretch;
            gap: 0;
          }
        }

        /* Image side — smaller: 35% width, capped height */
        .machine-image-wrap {
          position: relative;
          overflow: hidden;
          flex: 0 0 35%;
          min-height: 220px;
          max-height: 280px;
        }

        @media (min-width: 768px) {
          .machine-image-wrap {
            min-height: 260px;
            max-height: 320px;
          }
        }

        .machine-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .machine-row:hover .machine-img { transform: scale(1.04); }

        .machine-label {
          position: absolute;
          bottom: 12px;
          right: 16px;
          font-family: var(--font-heading, serif);
          font-size: 5rem;
          font-weight: 800;
          line-height: 1;
          color: hsl(var(--accent) / 0.18);
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.04em;
        }

        /* Text side takes remaining space */
        .machine-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2.5rem 2rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
        }

        @media (min-width: 1024px) {
          .machine-text { padding: 3rem 3rem; }
        }

        .machine-eyebrow-line {
          width: 40px;
          height: 1px;
          background: hsl(var(--accent));
          margin-bottom: 1.5rem;
        }

        .spec-pill {
          display: inline-block;
          font-size: 9px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid hsl(var(--border));
          padding: 3px 10px;
          border-radius: 2px;
          color: hsl(var(--muted-foreground));
          white-space: nowrap;
        }

        .machine-row + .machine-row {
          border-top: 1px solid hsl(var(--border));
        }
      `}</style>

      <section id="machinery" className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">

          {/* ── Section header ── */}
          <div ref={headerRef} className="mb-16 max-w-2xl">
            <p
              className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-6"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.6s ease 0ms, transform 0.6s ease 0ms",
              }}
            >
              State of the Art Machinery
            </p>

            <h2
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              }}
            >
              Engineered for Precision.{" "}
              <span style={{ color: "hsl(var(--accent))" }}>Built for Scale.</span>
            </h2>

            <div
              className="h-[1px] bg-accent mb-6"
              style={{
                width: headerVisible ? "64px" : "0px",
                transition: "width 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
              }}
            />

            <p
              className="font-body text-sm text-muted-foreground leading-relaxed"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s",
              }}
            >
              With state-of-the-art machinery and advanced manufacturing processes, Star Packaging
              delivers precision and quality in every product.
            </p>
          </div>

          {/* ── Alternating rows ── */}
          <div className="border border-border overflow-hidden rounded-sm">
            {machines.map((machine, i) => (
              <MachineRow key={machine.id} machine={machine} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Machinery;