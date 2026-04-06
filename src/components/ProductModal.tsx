import { useState } from "react";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-muted hover:bg-border transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-2xl" />

        <div className="p-6">
          <span className="font-body text-xs uppercase tracking-wider text-accent font-semibold">
            {product.subcategory}
          </span>
          <h3 className="font-heading text-2xl font-bold text-foreground mt-1 mb-2">{product.name}</h3>
          <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>

          <div className="flex items-center justify-between mb-4">
            <span className="font-body text-sm text-muted-foreground">Size: {product.size}</span>
            <span className="font-heading text-2xl font-bold text-primary">£{product.price.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2.5 hover:bg-muted transition-colors rounded-l-lg"
                aria-label="Decrease"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-body font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2.5 hover:bg-muted transition-colors rounded-r-lg"
                aria-label="Increase"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
