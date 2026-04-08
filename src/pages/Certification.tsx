
"use client";

const certifications = [
  {
    id: 1,
    src: "https://cpimg.tistatic.com/7616264/b/1/iso-9001-2015-certification-service.jpg",
    alt: "ISO 9001:2015",
    title: "ISO 9001: 2015",
    description: "Widely accepted standard for quality management systems.",
  },
  {
    id: 2,
    src: "https://www.sapcoindia.com/images/sapco/01.png",
    alt: "PS 9000:2016",
    title: "PS 9000: 2016",
    description: "GMP framework for best practices in pharmaceutical packaging.",
  },
  {
    id: 3,
    src: "https://usbcertification.com/wp-content/uploads/2024/01/BRCGS-LOGO.jpg",
    alt: "BRC GLOBAL STANDARD",
    title: "BRC GLOBAL STANDARD",
    description: "Recognized framework for managing product quality and operational criteria.",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVg7hJ9-0d9BZc68QFkwELipr8zLBaEYFCA&s",
    alt: "SEDEX",
    title: "SEDEX",
    description: "Ethical and responsible business practices certification.",
  },
  {
    id: 5,
    src: "https://www.cphi-online.com/company/psci/logo.jpeg",
    alt: "PSCI",
    title: "PSCI",
    description:
      "A coalition of healthcare companies committed to excellence in safety, environmental, and social outcomes.",
  },
  {
    id: 6,
    src: "https://premiumlabelandpackaging.com/wp-content/uploads/2023/04/image4.png",
    alt: "GMI",
    title: "GMI",
    description:
      "A certification that holds packaging suppliers accountable to established brand owner standards.",
  },
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group flex flex-col gap-6 p-8 border border-border rounded-sm hover:border-accent transition-colors duration-300"
          >
            {/* Logo */}
            <div className="flex items-center justify-center h-28 bg-muted/30 rounded-sm px-6">
              <img
                src={cert.src}
                alt={cert.alt}
                className="max-h-20 max-w-[180px] w-full h-auto object-contain  group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg text-foreground tracking-tight">
                {cert.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Certifications;