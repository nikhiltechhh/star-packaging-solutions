import { useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag, Package } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CheckoutModal from "./CheckoutModal";

const CartSidebar = () => {
  const { items, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[55]" onClick={() => setIsCartOpen(false)}>
        <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" />
      </div>

      <aside className="fixed top-0 right-0 h-full w-full max-w-md z-[56] bg-card shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading text-2xl text-foreground">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingBag className="w-12 h-12 mb-4 stroke-[1]" />
              <p className="font-body text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 pb-5 border-b border-border last:border-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body text-sm font-medium text-foreground truncate">
                      {product.name}
                    </h4>
                    <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">{product.size}</p>
                    {/* Customised Packaging label replaces per-item price */}
                    <span className="inline-flex items-center gap-1.5 font-body text-[10px] uppercase tracking-editorial text-accent font-semibold mt-1">
                      <Package className="w-3 h-3" />
                      Customised Packaging
                    </span>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1.5 hover:bg-muted transition-colors" aria-label="Decrease">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-body text-xs font-medium">{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1.5 hover:bg-muted transition-colors" aria-label="Increase">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(product.id)} className="p-1.5 text-muted-foreground hover:text-destructive transition-colors" aria-label="Remove">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-xs uppercase tracking-editorial text-muted-foreground">Packaging</span>
              <span className="inline-flex items-center gap-1.5 font-body text-[11px] uppercase tracking-editorial text-accent font-semibold">
                <Package className="w-3.5 h-3.5" />
                Customised Packaging
              </span>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-foreground text-background py-3.5 font-body font-medium text-[10px] uppercase tracking-editorial hover:bg-foreground/90 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>

      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
    </>
  );
};

export default CartSidebar;