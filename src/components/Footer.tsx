import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">CB</span>
          </div>
          <span className="font-display font-bold text-foreground">Coating<span className="text-primary">Bazaar</span></span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          India's largest B2B platform for powder coating raw materials procurement and credit.
        </p>
      </div>

      <div>
        <h4 className="font-display font-semibold text-foreground mb-3">Categories</h4>
        <ul className="space-y-2">
          {categories.slice(0, 5).map((c) => (
            <li key={c.id}>
              <Link to={`/category/${c.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-foreground mb-3">Company</h4>
        <ul className="space-y-2">
          {["About Us", "Contact", "Careers", "Blog"].map((item) => (
            <li key={item}>
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-foreground mb-3">Support</h4>
        <ul className="space-y-2">
          {["Help Center", "Terms of Service", "Privacy Policy", "Refund Policy"].map((item) => (
            <li key={item}>
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="container mt-8 pt-6 border-t border-border">
      <p className="text-xs text-muted-foreground text-center">
        © 2026 CoatingBazaar. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
