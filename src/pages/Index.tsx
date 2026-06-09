import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CategoriesGrid from "@/components/CategoriesGrid";
import ProductsGrid from "@/components/ProductsGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToFirstHighlightedTile = (query: string) => {
    if (!query.trim()) return;

    // Categories render before products, so this naturally prefers category matches first.
    const firstHighlighted = document.querySelector<HTMLElement>('[data-highlighted="true"]');
    firstHighlighted?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection
        query={searchQuery}
        onQueryChange={setSearchQuery}
        onSearchSubmit={scrollToFirstHighlightedTile}
      />
      <StatsBar />
      <CategoriesGrid highlightQuery={searchQuery} />
      <ProductsGrid highlightQuery={searchQuery} />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
