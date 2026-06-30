import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3, LogIn } from "lucide-react";
import { useCategories } from "@/hooks/useCategories";
import { Button } from "@/components/ui/button";
import LoginDialog from "@/components/LoginDialog";

const Navbar = () => {
  const location = useLocation();
  const { data: categories = [] } = useCategories();
  const [loginOpen, setLoginOpen] = useState(false);
  const isTopMenuActive = (path: string) => location.pathname === path;
  const isKnowledgeHubActive = location.pathname.startsWith("/knowledge-hub");

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
          <Link
            to="/prices"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isTopMenuActive("/prices") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart3 className="h-4 w-4" /> Prices
          </Link>
          <Link
            to="/knowledge-hub"
            className={`text-sm font-medium transition-colors ${
              isKnowledgeHubActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Knowledge Hub
          </Link>
          <Link
            to="/custom-solutions"
            className={`text-sm font-medium transition-colors ${
              isTopMenuActive("/custom-solutions") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Custom Solutions
          </Link>
          <Link
            to="/build-your-paint-shop"
            className={`text-sm font-medium transition-colors ${
              isTopMenuActive("/build-your-paint-shop") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Build Your Paint Shop
          </Link>
          <Link
            to="/enter-india"
            className={`text-sm font-medium transition-colors ${
              isTopMenuActive("/enter-india") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Enter India
          </Link>
          <Button size="sm" className="gap-1.5" onClick={() => setLoginOpen(true)}>
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
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </header>
  );
};

export default Navbar;
