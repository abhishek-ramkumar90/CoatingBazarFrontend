import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";

const ProductPage = () => {
  const { productName } = useParams<{ productName: string }>();
  const name = decodeURIComponent(productName || "");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="flex items-center gap-1 text-primary hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{name}</span>
        </div>
      </div>

      <div className="container pb-6">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          {name} — Industries Served
        </h1>
        <p className="mt-1 text-sm text-muted-foreground max-w-3xl">
          Select an industry to explore applications and suppliers of {name}.
        </p>
      </div>

      <div className="container pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/industry/${ind.id}`}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 h-36 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-badge-bg group-hover:bg-primary/10 transition-colors">
                  <ind.icon className="h-6 w-6 text-badge-text group-hover:text-primary transition-colors" />
                </div>
                <span className="text-center text-sm font-medium text-foreground">
                  {ind.name}
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

export default ProductPage;
