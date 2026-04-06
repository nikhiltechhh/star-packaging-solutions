import { useState } from "react";
import { X, Send } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { z } from "zod";

const checkoutSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  contact: z.string().trim().min(1, "Contact number is required").max(20),
  address: z.string().trim().min(1, "Address is required").max(500),
});

interface CheckoutModalProps {
  onClose: () => void;
}

const CheckoutModal = ({ onClose }: CheckoutModalProps) => {
  const { items, totalPrice, clearCart, setIsCartOpen } = useCart();
  const [form, setForm] = useState({ name: "", contact: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const orderLines = items
      .map((i) => `• ${i.product.name} (${i.product.size}) x${i.quantity} — £${(i.product.price * i.quantity).toFixed(2)}`)
      .join("\n");

    const message = `🛒 *New Order from Star Packaging*\n\n*Customer:* ${form.name}\n*Contact:* ${form.contact}\n*Address:* ${form.address}\n\n*Items:*\n${orderLines}\n\n*Total: £${totalPrice.toFixed(2)}*`;

    const whatsappUrl = `https://wa.me/447456519238?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    clearCart();
    setIsCartOpen(false);
    onClose();
  };

  const update = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: "" }));
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-2xl shadow-xl max-w-md w-full animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full bg-muted hover:bg-border transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-1">Checkout</h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Fill in your details and the order will be sent via WhatsApp
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: "name", label: "Full Name", placeholder: "John Doe", type: "text" },
              { key: "contact", label: "Contact Number", placeholder: "+44 ...", type: "tel" },
              { key: "address", label: "Delivery Address", placeholder: "123 High Street, London", type: "text" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-body text-sm font-medium text-foreground mb-1 block">
                  {field.label}
                </label>
                {field.key === "address" ? (
                  <textarea
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => update(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => update(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                )}
                {errors[field.key] && (
                  <p className="font-body text-xs text-destructive mt-1">{errors[field.key]}</p>
                )}
              </div>
            ))}

            <div className="bg-muted rounded-lg p-3 mt-2">
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">{items.length} item(s)</span>
                <span className="font-bold text-foreground">£{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-accent-foreground py-3 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Order via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
