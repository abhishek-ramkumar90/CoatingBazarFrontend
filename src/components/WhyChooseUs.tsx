import { Shield, TrendingUp, Truck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: TrendingUp, title: "Live Market Prices", desc: "Real-time pricing updated every 30 minutes across all categories" },
  { icon: Shield, title: "Quality Assured", desc: "Every supplier verified with ISO certifications and quality audits" },
  { icon: Truck, title: "PAN India Delivery", desc: "Reliable logistics network delivering to 22+ states" },
  { icon: CreditCard, title: "Easy Credit", desc: "Get working capital and flexible payment terms for bulk orders" },
];

const WhyChooseUs = () => (
  <section className="py-16 bg-card border-y border-border">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
        Why Choose CoatingBazaar?
      </h2>
      <p className="mt-2 text-center text-muted-foreground">
        The trusted platform for powder coating raw material procurement
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-badge-bg">
              <f.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
