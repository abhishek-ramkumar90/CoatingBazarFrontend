import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productsByCategory } from "@/data/products";
import { setSelection } from "@/lib/orderSelection";
import { getProductTileIcon } from "@/lib/productTileIcon";

interface ProductsGridProps {
  highlightQuery?: string;
}

const ProductsGrid = ({ highlightQuery = "" }: ProductsGridProps) => {
  const allProducts = Object.values(productsByCategory).flat();
  const tokens = highlightQuery
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  // Deduplicate by name so each product appears once
  const seen = new Set<string>();
  const uniqueProducts = allProducts.filter((p) => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          All Products
        </h2>
        <p className="mt-2 text-muted-foreground">
          Click on any product to view the industries it serves
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {uniqueProducts.map((p, i) => {
            const ProductIcon = getProductTileIcon(p.name);
            const isHighlighted =
              tokens.length > 0 &&
              tokens.every((t) => p.name.toLowerCase().includes(t));

            return (
            <motion.div
              key={p.id}
              data-highlighted={isHighlighted ? "true" : "false"}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/product/${encodeURIComponent(p.name)}`}
                onClick={() => setSelection({ categoryId: undefined, categoryName: undefined, productName: p.name, industryId: undefined, industryName: undefined, colorSystem: undefined, colorCode: undefined, colorName: undefined, colorHex: undefined })}
                className={`group flex flex-col items-center justify-center gap-2 rounded-xl border bg-card p-4 h-32 hover:shadow-md hover:border-primary/40 transition-all ${
                  isHighlighted
                    ? "border-primary bg-primary/5 ring-1 ring-primary/40"
                    : "border-border"
                }`}
              >
                <ProductIcon className={`h-10 w-10 transition-colors ${isHighlighted ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                <span className="text-center text-sm font-medium text-foreground line-clamp-2 leading-tight">
                  {p.name}
                </span>
              </Link>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
