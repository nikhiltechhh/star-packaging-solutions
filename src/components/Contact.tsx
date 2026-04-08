import { useState } from "react";
import { Phone, Mail, Globe, CheckCircle, Instagram } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+44 7456 519238", href: "tel:+447456519238" },
  { icon: Mail, label: "Email", value: "starpackaging.bm@gmail.com", href: "mailto:starpackaging.bm@gmail.com" },
  { icon: Globe, label: "Website", value: "www.starpackaging.com", href: "https://www.starpackaging.com" },
  { icon: Instagram, label: "Instagram", value: "@starpackaging", href: "https://www.instagram.com/starpackaging" },
];

const productOptions = [
  "Pharmacy / Medicine Bags",
  "Food Boxes & Containers",
  "Gift Packaging",
  "Eco-Friendly / Bagasse Products",
  "Retail Bags",
  "Custom Branded Packaging",
  "Other",
];

type FormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productInterest: string;
  quantity: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  productInterest: "",
  quantity: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.companyName.trim()) e.companyName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.productInterest) e.productInterest = "Required";
    if (!form.quantity.trim()) e.quantity = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const lines = [
      `*New Inquiry — Star Packaging*`,
      ``,
      `*Name:* ${form.fullName}`,
      `*Company:* ${form.companyName}`,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : null,
      `*Product Interest:* ${form.productInterest}`,
      `*Quantity Required:* ${form.quantity}`,
      ``,
      `*Message:*`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappNumber = "447456519238";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const fieldClass = (field: keyof FormState) =>
    `w-full bg-transparent border ${
      errors[field] ? "border-destructive" : "border-border"
    } px-4 py-3 font-body text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200`;

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-6">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6">
            Let's Talk Packaging
          </h2>
          <div className="w-16 h-[1px] bg-accent" />
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left — Contact Info */}
          <div>
            <p className="font-body text-muted-foreground leading-[1.8] text-[15px] mb-10">
              Reach out to us directly or fill in the inquiry form and we'll get back to
              you as soon as possible. Bulk orders and custom branding welcome.
            </p>

            <div className="space-y-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <Icon className="w-4 h-4 text-accent stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-[14px] text-foreground hover:text-accent transition-colors duration-200"
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-[14px] text-muted-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp direct CTA */}
            <div className="mt-12 border-t border-border pt-8">
              <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-3">
                Prefer WhatsApp?
              </p>
              <a
                href="https://wa.me/447456519238"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-body text-[13px] uppercase tracking-editorial text-foreground border border-border px-6 py-3 hover:border-accent/40 hover:text-accent transition-colors duration-300"
              >
                Message Us Directly
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted && (
              <div className="flex items-center gap-3 border border-accent/30 px-5 py-4 mb-8 text-accent">
                <CheckCircle className="w-4 h-4 stroke-[1.5] shrink-0" />
                <p className="font-body text-[13px]">
                  Your inquiry has been sent to WhatsApp. We'll be in touch shortly.
                </p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">

              {/* Full Name */}
              <div>
                <label className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground block mb-2">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={form.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                  className={fieldClass("fullName")}
                />
                {errors.fullName && (
                  <p className="font-body text-[11px] text-destructive mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground block mb-2">
                  Company Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Acme Ltd"
                  value={form.companyName}
                  onChange={(e) => set("companyName", e.target.value)}
                  className={fieldClass("companyName")}
                />
                {errors.companyName && (
                  <p className="font-body text-[11px] text-destructive mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground block mb-2">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={fieldClass("email")}
                />
                {errors.email && (
                  <p className="font-body text-[11px] text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+44 7000 000000"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={fieldClass("phone")}
                />
              </div>

              {/* Product Interest */}
              <div>
                <label className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground block mb-2">
                  Product Interest <span className="text-accent">*</span>
                </label>
                <select
                  value={form.productInterest}
                  onChange={(e) => set("productInterest", e.target.value)}
                  className={`${fieldClass("productInterest")} appearance-none cursor-pointer`}
                >
                  <option value="">Select a product...</option>
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.productInterest && (
                  <p className="font-body text-[11px] text-destructive mt-1">{errors.productInterest}</p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground block mb-2">
                  Quantity Required <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 units, 10 boxes"
                  value={form.quantity}
                  onChange={(e) => set("quantity", e.target.value)}
                  className={fieldClass("quantity")}
                />
                {errors.quantity && (
                  <p className="font-body text-[11px] text-destructive mt-1">{errors.quantity}</p>
                )}
              </div>

              {/* Message — full width */}
              <div className="sm:col-span-2">
                <label className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground block mb-2">
                  Message / Requirements <span className="text-accent">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your packaging needs, specifications, branding requirements..."
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  className={`${fieldClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="font-body text-[11px] text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 pt-2">
                <button
                  onClick={handleSubmit}
                  className="font-body text-[11px] uppercase tracking-editorial text-foreground border border-border px-10 py-4 hover:border-accent/40 hover:text-accent transition-colors duration-300 w-full sm:w-auto"
                >
                  Send Inquiry via WhatsApp
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;