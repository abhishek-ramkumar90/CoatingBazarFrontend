import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { setSelection } from "@/lib/orderSelection";
import { getIndustryTileImage } from "@/lib/industryTileImage";
import { useSeo } from "@/hooks/useSeo";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);

  useSeo({
    title: category
      ? `${category.name} Coatings by Industry | CoatingBazaar`
      : "Category Not Found | CoatingBazaar",
    description: category
      ? `Explore ${category.name.toLowerCase()} options by industry and find suitable paint and coating products.`
      : "The requested coating category is not available.",
    canonicalPath: category ? `/category/${category.id}` : "/",
    keywords: category ? [category.name, "coatings", "industrial paint"] : ["coatingbazaar"],
    noIndex: !category,
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
          {category.name} — Choose Industry
        </h1>
        <p className="mt-1 text-sm text-muted-foreground max-w-3xl">
          Select an industry to view products and solutions for {category.name.toLowerCase()}.
        </p>
      </div>

      <div className="container pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {industries.map((industry, i) => {
            const imageUrl = getIndustryTileImage(industry.id);
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/industry/${encodeURIComponent(industry.id)}`}
                  onClick={() => setSelection({ categoryId: category.id, categoryName: category.name, industryId: industry.id, industryName: industry.name, productName: undefined, colorSystem: undefined, colorCode: undefined, colorName: undefined, colorHex: undefined })}
                  className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-2 h-44 hover:shadow-md hover:border-primary/40 transition-all"
                >
                  <img
                    src={imageUrl}
                    alt={industry.name}
                    loading="lazy"
                    className="h-24 w-full rounded-md object-cover"
                  />
                  <span className="text-center text-sm font-medium text-foreground line-clamp-2 leading-tight">
                    {industry.name}
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

export default CategoryPage;
