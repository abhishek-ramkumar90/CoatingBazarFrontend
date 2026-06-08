import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";
import { productsByCategory } from "@/data/products";
import { getSelection, setSelection } from "@/lib/orderSelection";
import { getProductTileIcon } from "@/lib/productTileIcon";

const IndustryPage = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = industries.find((i) => i.id === industryId);
  const selection = getSelection();
  const categoryId = selection.categoryId;
  const categoryName = selection.categoryName;

  // Get products for the selected category
  const products = categoryId ? productsByCategory[categoryId] || [] : [];

  // Deduplicate products by name
  const seen = new Set<string>();
  const uniqueProducts = products.filter((p) => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });

  useEffect(() => {
    if (industry) setSelection({ industryId: industry.id, industryName: industry.name });
  }, [industry]);

  if (!industry || !categoryId) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-display font-bold">Invalid selection</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-4">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
      </div>
      <div className="container pb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-badge-bg">
            <Icon className="h-7 w-7 text-badge-text" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {categoryName} — {industry.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              Select a product for the {industry.name.toLowerCase()} sector.
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {uniqueProducts.map((product, i) => {
            const ProductIcon = getProductTileIcon(product.name);
            return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/product/${encodeURIComponent(product.name)}`}
                onClick={() => setSelection({ productName: product.name, colorSystem: undefined, colorCode: undefined, colorName: undefined, colorHex: undefined })}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 h-36 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-badge-bg group-hover:bg-primary/10 transition-colors">
                  <ProductIcon className="h-6 w-6 text-badge-text group-hover:text-primary transition-colors" />
                </div>
                <span className="text-center text-sm font-medium text-foreground line-clamp-2 leading-tight">
                  {product.name}
                </span>
              </Link>
            </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustryPage;
