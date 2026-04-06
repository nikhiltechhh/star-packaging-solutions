import { useState } from "react";
import { Plus, Minus, ShoppingCart, Eye } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductModal from "./ProductModal";
import type { Product } from "@/data/products";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addToCart } = useCart();

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  const getQty = (id: string) => quantities[id] || 1;
  const setQty = (id: string, val: number) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, val) }));

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm px-5 py-2 rounded-full transition-all font-medium ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={400}
                />
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Quick view"
                >
                  <span className="bg-card text-foreground px-4 py-2 rounded-lg font-body text-sm font-medium flex items-center gap-2">
                    <Eye className="w-4 h-4" /> Quick View
                  </span>
                </button>
              </div>

              <div className="p-4">
                <span className="font-body text-[11px] uppercase tracking-wider text-accent font-semibold">
                  {product.subcategory}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-1 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-3">{product.size}</p>

                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading text-xl font-bold text-primary">
                    £{product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQty(product.id, getQty(product.id) - 1)}
                      className="p-1.5 hover:bg-muted transition-colors rounded-l-lg"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-body text-sm font-semibold">
                      {getQty(product.id)}
                    </span>
                    <button
                      onClick={() => setQty(product.id, getQty(product.id) + 1)}
                      className="p-1.5 hover:bg-muted transition-colors rounded-r-lg"
                      aria-label="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product, getQty(product.id))}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
};

export default Products;
