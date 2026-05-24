import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";

const CategoriesGrid = () => {
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
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/category/${cat.id}`}
                className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 h-32 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-badge-bg group-hover:bg-primary/10 transition-colors">
                  <cat.icon className="h-5 w-5 text-badge-text group-hover:text-primary transition-colors" />
                </div>
                <span className="text-center text-sm font-medium text-foreground line-clamp-2 leading-tight">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
