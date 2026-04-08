import video from "@/assets/star.mp4";

const Who = () => (
  <section id="who-we-are" className="py-24 lg:py-32 border-t border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — Text */}
        <div>
          <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-6">
            Who We Are
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6">
            A Trusted Name in Premium Packaging
          </h2>
          <div className="w-16 h-[1px] bg-accent mb-8" />
          <p className="font-body text-muted-foreground leading-[1.8] text-[15px] mb-6">
            Founded with a vision to revolutionize product packaging, Star Packaging has
            grown into a comprehensive solution provider trusted by businesses across the
            UK. We serve the pharmaceutical, food service, retail, and gifting sectors
            with precision and care.
          </p>
          <p className="font-body text-muted-foreground leading-[1.8] text-[15px] mb-10">
            Our commitment goes beyond supplying packaging — we build lasting partnerships,
            understanding your brand and your customers so every product we deliver
            feels exactly right.
          </p>
          <a
            href="#about"
            className="inline-flex font-body text-[11px] uppercase tracking-editorial text-foreground border border-border px-8 py-4 hover:border-accent/40 hover:text-accent transition-colors duration-300"
          >
            Learn More About Us
          </a>
        </div>

        {/* Right — Video */}
        <div className="relative w-full">
          {/* Subtle accent border offset */}
          <div className="absolute -top-3 -right-3 w-full h-full border border-accent/20 pointer-events-none" />
          <div className="relative w-full overflow-hidden border border-border" style={{ aspectRatio: "16/9" }}>
            <video
              src={video}
              muted
              autoPlay
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Who;