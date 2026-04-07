"use client";

const certifications = [
  { id: 1, src: "https://cpimg.tistatic.com/7616264/b/1/iso-9001-2015-certification-service.jpg", alt: "ISO 9001:2015" },
  { id: 2, src: "https://www.sapcoindia.com/images/sapco/01.png", alt: "SAPCO" },
  { id: 3, src: "https://usbcertification.com/wp-content/uploads/2024/01/BRCGS-LOGO.jpg", alt: "BRCGS" },
  { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVg7hJ9-0d9BZc68QFkwELipr8zLBaEYFCA&s", alt: "Certification 4" },
  { id: 5, src: "https://www.cphi-online.com/company/psci/logo.jpeg", alt: "PSCI" },
  { id: 6, src: "https://premiumlabelandpackaging.com/wp-content/uploads/2023/04/image4.png", alt: "Premium Label" },
];

const doubled = [...certifications, ...certifications];

const Certifications = () => (
  <>
    <style>{`
      @keyframes scroll-left {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .cert-track {
        display: flex;
        width: max-content;
        animation: scroll-left 18s linear infinite;
      }
      .cert-slider:hover .cert-track {
        animation-play-state: paused;
      }
    `}</style>

    <section id="certifications" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12">
          <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-6">
            Certifications
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6">
            Standards We're Proud to Uphold
          </h2>
          <div className="w-16 h-[1px] bg-accent" />
        </div>

        {/* Infinite Slider */}
        <div className="cert-slider overflow-hidden">
          <div className="cert-track">
            {doubled.map((cert, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 px-10 flex-shrink-0"
              >
                <div className="flex items-center justify-center" style={{ minHeight: "70px" }}>
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="max-w-[120px] max-h-[70px] w-full h-auto object-contain  hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground text-center whitespace-nowrap">
                  {cert.alt}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  </>
);

export default Certifications;