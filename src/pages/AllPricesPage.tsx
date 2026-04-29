import { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, BarChart3, MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import RequirementDialog from "@/components/RequirementDialog";

const AllPricesPage = () => {
  const [reqOpen, setReqOpen] = useState(false);
  const [reqProduct, setReqProduct] = useState("");
  const openRequirement = (name: string) => { setReqProduct(name); setReqOpen(true); };
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-6">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          All Live Prices | Powder Coating Raw Materials
        </h1>
        <p className="mt-1 text-sm text-muted-foreground max-w-3xl">
          Compare live market rates across all powder coating categories. Updated every 30 minutes.
        </p>
      </div>

      <div className="container pb-16 space-y-8">
        {categories.map((category) => {
          const products = productsByCategory[category.id] || [];
          if (products.length === 0) return null;

          return (
            <div key={category.id}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h2 className="font-display font-semibold text-lg text-foreground">{category.name}</h2>
                </div>
                <Link to={`/category/${category.id}`}>
                  <Button variant="outline" size="sm" className="gap-1">
                    View All <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-secondary/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Products</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Brand</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Prices</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {products.map((product, i) => (
                        <motion.tr
                          key={product.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.03 }}
                          className="hover:bg-secondary/30 transition-colors"
                        >
                          <td className="px-4 py-3.5">
                            <p className="font-medium text-sm text-foreground">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.grade}</p>
                          </td>
                          <td className="px-4 py-3.5 text-sm text-muted-foreground">{product.brand}</td>
                          <td className="px-4 py-3.5">
                            <span className="text-sm text-foreground font-medium">EX - </span>
                            <span className="text-sm text-muted-foreground">{product.location}</span>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-bold text-sm text-foreground">
                                {formatPrice(product.price)}/{product.unit}
                              </span>
                              {product.change !== 0 && (
                                <span className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-xs font-semibold ${
                                  product.change > 0 ? "bg-price-up/10 text-price-up" : "bg-price-down/10 text-price-down"
                                }`}>
                                  {product.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                  {Math.abs(product.change)}%
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">{product.updatedAgo}</p>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center justify-end gap-2">
                              <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground text-xs h-8">
                                Buy
                              </Button>
                              <button className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground">
                                <BarChart3 className="h-4 w-4" />
                              </button>
                              <button className="p-1.5 rounded-md hover:bg-secondary transition-colors text-accent">
                                <MessageCircle className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default AllPricesPage;
