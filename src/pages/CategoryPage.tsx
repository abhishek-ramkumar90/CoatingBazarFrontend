import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { setSelection } from "@/lib/orderSelection";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);
  const products = categoryId ? productsByCategory[categoryId] || [] : [];

  // Deduplicate products by name
  const seen = new Set<string>();
  const uniqueProducts = products.filter((p) => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Category not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="flex items-center gap-1 text-primary hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{category.name}</span>
        </div>
      </div>

      <div className="container pb-6">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          {category.name} — Products
        </h1>
        <p className="mt-1 text-sm text-muted-foreground max-w-3xl">
          {category.description}. Click on any product to view the industries it serves.
        </p>
      </div>

      <div className="container pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {uniqueProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/product/${encodeURIComponent(p.name)}`}
                onClick={() => setSelection({ categoryId: category.id, categoryName: category.name, productName: p.name, industryId: undefined, industryName: undefined, colorSystem: undefined, colorCode: undefined, colorName: undefined, colorHex: undefined })}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 h-36 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <FlaskConical className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-center text-sm font-medium text-foreground line-clamp-2 leading-tight">
                  {p.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
