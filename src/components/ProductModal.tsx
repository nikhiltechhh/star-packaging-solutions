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
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      <div
        className="relative bg-card shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />

        <div className="p-8">
          <span className="font-body text-[10px] uppercase tracking-editorial text-accent font-medium">
            {product.subcategory}
          </span>
          <h3 className="font-heading text-3xl text-foreground mt-2 mb-3">{product.name}</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
            <span className="font-body text-xs text-muted-foreground uppercase tracking-wide">Size: {product.size}</span>
            <span className="font-heading text-3xl text-foreground">£{product.price.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-border">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3 hover:bg-muted transition-colors"
                aria-label="Decrease"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-14 text-center font-body font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-3 hover:bg-muted transition-colors"
                aria-label="Increase"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background py-3.5 font-body font-medium text-[10px] uppercase tracking-editorial hover:bg-foreground/90 transition-colors"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
