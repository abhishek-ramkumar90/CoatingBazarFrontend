import { Link, useLocation } from "react-router-dom";
import { Search, BarChart3, Newspaper, ShoppingCart, Info, LogIn } from "lucide-react";
import { useCategories } from "@/hooks/useCategories";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const { data: categories = [] } = useCategories();

  return (
    <header className="sticky top-0 z-50 border-b border-nav-border bg-nav-bg shadow-sm">
      {/* Top bar */}
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">CB</span>
          </div>
          <div>
            <span className="text-lg font-display font-bold text-foreground">Coating</span>
            <span className="text-lg font-display font-bold text-primary">Bazaar</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/prices" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <BarChart3 className="h-4 w-4" /> Prices
          </Link>
          <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Newspaper className="h-4 w-4" /> News
          </button>
          <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingCart className="h-4 w-4" /> Orders
          </button>
          <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Info className="h-4 w-4" /> About Us
          </button>
          <Button size="sm" className="gap-1.5">
            <LogIn className="h-4 w-4" /> Login Now
          </Button>
        </div>
      </div>

      {/* Category bar */}
      <div className="border-t border-nav-border bg-nav-bg">
        <div className="container flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
          <Link
            to="/"
            className="flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
          >
            All Categories
          </Link>
          {categories.map((cat) => {
            const isActive = location.pathname === `/category/${cat.id}`;
            return (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
