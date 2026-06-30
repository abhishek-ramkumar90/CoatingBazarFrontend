import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CategoriesGrid from "@/components/CategoriesGrid";
import ProductsGrid from "@/components/ProductsGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useSeo({
    title: "CoatingBazaar | Paints, Powder Coatings, Colors and Industrial Finishes",
    description:
      "Discover powder coatings, liquid paints, RAL and Pantone color selection, and industrial coating solutions at CoatingBazaar.",
    canonicalPath: "/",
    keywords: [
      "coatingbazaar",
      "industrial paints",
      "powder coating",
      "liquid paints",
      "paint supplier India",
    ],
    jsonLd: [
      {
        id: "home-website",
        data: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CoatingBazaar",
          url: window.location.origin,
          potentialAction: {
            "@type": "SearchAction",
            target: `${window.location.origin}/knowledge-hub`,
            "query-input": "required name=search_term_string",
          },
        },
      },
      {
        id: "home-organization",
        data: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CoatingBazaar",
          url: window.location.origin,
          sameAs: [],
        },
      },
    ],
  });

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
