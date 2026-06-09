import { Search } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = ["Epoxy Resin", "TiO2", "Polyester", "Flow Agent", "Hardener"];

interface HeroSectionProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit?: (query: string) => void;
}

const HeroSection = ({ query, onQueryChange, onSearchSubmit }: HeroSectionProps) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit?.(query);
  };

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="container relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-display font-bold text-white max-w-2xl leading-tight"
        >
          India's Largest Powder Coating Raw Materials Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-lg text-white/70 max-w-xl"
        >
          Live prices, bulk procurement & credit for powder coating manufacturers
        </motion.p>

        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex max-w-2xl"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search categories or products (e.g. Powder Coating, Epoxy)..."
              className="h-14 w-full rounded-l-xl border-0 bg-white pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="h-14 rounded-r-xl bg-primary px-8 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Search
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 flex flex-wrap gap-2"
        >
          {quickLinks.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm cursor-pointer hover:bg-white/25 transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
