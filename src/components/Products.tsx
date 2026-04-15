import { useState } from "react";
import { Plus, Minus, ShoppingCart, Eye, Package } from "lucide-react";
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
    <section id="products" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-[11px] uppercase tracking-editorial text-muted-foreground mb-4">
            Our Collection
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Products
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-[11px] uppercase tracking-editorial px-6 py-2.5 transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={400}
                  height={400}
                />
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Quick view"
                >
                  <span className="bg-background text-foreground px-5 py-2.5 font-body text-[10px] font-medium uppercase tracking-editorial flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" /> Quick View
                  </span>
                </button>
              </div>

              <div className="p-5">
                <span className="font-body text-[10px] uppercase tracking-editorial text-accent font-medium">
                  {product.subcategory}
                </span>
                <h3 className="font-heading text-xl text-foreground mt-2 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-4">{product.size}</p>

                <div className="flex items-center justify-between mb-3">
                  {/* Customised Packaging label replaces price */}
                  <span className="flex items-center gap-1.5 font-body text-[10px] uppercase tracking-editorial text-accent font-semibold">
                    <Package className="w-3.5 h-3.5" />
                    Customised Packaging
                  </span>
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQty(product.id, getQty(product.id) - 1)}
                      className="p-2 hover:bg-muted transition-colors"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center font-body text-xs font-medium">
                      {getQty(product.id)}
                    </span>
                    <button
                      onClick={() => setQty(product.id, getQty(product.id) + 1)}
                      className="p-2 hover:bg-muted transition-colors"
                      aria-label="Increase"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Bulk quantity presets */}
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="font-body text-[9px] uppercase tracking-editorial text-muted-foreground mr-1">
                    Bulk:
                  </span>
                  {[50, 100, 250, 500].map((bulk) => (
                    <button
                      key={bulk}
                      onClick={() => setQty(product.id, bulk)}
                      className={`font-body text-[9px] uppercase tracking-editorial px-2.5 py-1 border transition-all duration-200 ${
                        getQty(product.id) === bulk
                          ? "bg-foreground text-background border-foreground"
                          : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {bulk}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => addToCart(product, getQty(product.id))}
                  className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 font-body font-medium text-[10px] uppercase tracking-editorial hover:bg-foreground/90 transition-colors"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
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