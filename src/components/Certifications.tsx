const certifications = [
  { id: 1, src: "https://cpimg.tistatic.com/7616264/b/1/iso-9001-2015-certification-service.jpg", alt: "ISO 9001:2015" },
  { id: 2, src: "https://www.sapcoindia.com/images/sapco/01.png", alt: "SAPCO" },
  { id: 3, src: "https://usbcertification.com/wp-content/uploads/2024/01/BRCGS-LOGO.jpg", alt: "BRCGS" },
  { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVg7hJ9-0d9BZc68QFkwELipr8zLBaEYFCA&s", alt: "Certification 4" },
  { id: 5, src: "https://www.cphi-online.com/company/psci/logo.jpeg", alt: "PSCI" },
  { id: 6, src: "https://premiumlabelandpackaging.com/wp-content/uploads/2023/04/image4.png", alt: "Premium Label" },
];

const Certifications = () => (
  <section id="certifications" className="py-24 lg:py-32 border-t border-border">
    <div className="container mx-auto px-6 lg:px-12">

      {/* Header */}
      <div className="mb-16">
        <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-6">
          Certifications
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6">
          Standards We're Proud to Uphold
        </h2>
        <div className="w-16 h-[1px] bg-accent" />
      </div>

      {/* 3×2 Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-px border border-border">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group flex flex-col items-center justify-center gap-4 p-8 sm:p-12 lg:p-16 border-border hover:bg-accent/[0.03] transition-colors duration-300"
          >
            <div className="w-full flex items-center justify-center" style={{ minHeight: "140px" }}>
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[200px] h-auto max-h-[140px] object-contain transition-all duration-500"
              />
            </div>
            <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground text-center">
              {cert.alt}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Certifications;