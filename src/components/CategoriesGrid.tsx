import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCategories } from "@/hooks/useCategories";

const CategoriesGrid = () => {
  const { data: categories = [], isLoading } = useCategories();

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Explore Our Categories
          </h2>
          <p className="mt-2 text-muted-foreground">Loading categories...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          Explore Our Categories
        </h2>
        <p className="mt-2 text-muted-foreground">
          Access live prices, get quotations, and latest market news instantly
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/category/${cat.id}`}
                className="group block rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-badge-bg">
                      <cat.icon className="h-5 w-5 text-badge-text" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{cat.productCount} products</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cat.subcategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
