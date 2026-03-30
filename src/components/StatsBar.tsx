import { Package, Users, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Package, value: "50K+", label: "Orders Delivered", color: "text-stat-icon" },
  { icon: Users, value: "1 Million+", label: "SMEs Empowered", color: "text-accent" },
  { icon: MapPin, value: "22 States+", label: "PAN India Reach", color: "text-primary" },
  { icon: Globe, value: "10+", label: "Countries Served", color: "text-stat-icon" },
];

const StatsBar = () => (
  <div className="container -mt-8 relative z-20">
    <div className="rounded-2xl bg-card shadow-lg border border-border p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
            <s.icon className={`h-6 w-6 ${s.color}`} />
          </div>
          <div>
            <p className={`text-xl font-display font-bold ${s.color}`}>{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default StatsBar;
