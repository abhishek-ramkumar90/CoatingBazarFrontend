import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { setSelection } from "@/lib/orderSelection";
import { getCategoryTileImage } from "@/lib/categoryTileImage";

interface CategoriesGridProps {
  highlightQuery?: string;
}

const CategoriesGrid = ({ highlightQuery = "" }: CategoriesGridProps) => {
  const normalize = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  const normalizedQuery = normalize(highlightQuery);
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          Explore Our Categories
        </h2>
        <p className="mt-2 text-muted-foreground">
          Click on any category to view its products
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {categories.map((cat, i) => {
            const imageUrl = getCategoryTileImage(cat.id);
            const isHighlighted =
              tokens.length > 0 &&
              (normalize(cat.name).includes(normalizedQuery) ||
                tokens.some((t) => normalize(cat.name).includes(t)));

            return (
              <motion.div
                key={cat.id}
                data-highlighted={isHighlighted ? "true" : "false"}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/category/${cat.id}`}
                  onClick={() => setSelection({ categoryId: cat.id, categoryName: cat.name, productName: undefined, industryId: undefined, industryName: undefined, colorSystem: undefined, colorCode: undefined, colorName: undefined, colorHex: undefined })}
                  className={`group flex flex-col gap-2 rounded-xl border bg-card p-2 h-44 hover:shadow-md hover:border-primary/40 transition-all ${
                    isHighlighted
                      ? "border-primary bg-primary/5 ring-1 ring-primary/40"
                      : "border-border"
                  }`}
                >
                  <img
                    src={imageUrl}
                    alt={cat.name}
                    loading="lazy"
                    className="h-24 w-full rounded-md object-cover"
                  />
                  <span className="text-center text-sm font-medium text-foreground line-clamp-2 leading-tight">
                    {cat.name}
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

export default CategoriesGrid;
