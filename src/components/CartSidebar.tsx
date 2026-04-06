import { useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CheckoutModal from "./CheckoutModal";

const CartSidebar = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[55]" onClick={() => setIsCartOpen(false)}>
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      </div>

      <aside className="fixed top-0 right-0 h-full w-full max-w-md z-[56] bg-card shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Your Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
              <p className="font-body">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 bg-muted/50 rounded-xl p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body text-sm font-semibold text-foreground truncate">
                      {product.name}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground">{product.size}</p>
                    <p className="font-heading text-sm font-bold text-primary mt-1">
                      £{(product.price * quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border rounded-lg bg-card">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1 hover:bg-muted transition-colors rounded-l-lg" aria-label="Decrease">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center font-body text-xs font-semibold">{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1 hover:bg-muted transition-colors rounded-r-lg" aria-label="Increase">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(product.id)} className="p-1.5 text-destructive hover:bg-destructive/10 rounded-lg transition-colors" aria-label="Remove">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body font-semibold text-foreground">Total</span>
              <span className="font-heading text-2xl font-bold text-primary">
                £{totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
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
