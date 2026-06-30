import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ralClassic, pantoneColors, ColorSwatch } from "@/data/colors";
import ColorSearch from "@/components/ColorSearch";
import { setSelection } from "@/lib/orderSelection";
import { useSeo } from "@/hooks/useSeo";

type ColorSystem = "RAL Classic" | "Pantone";

const isLight = (hex: string) => {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

const matchesColorQuery = (color: ColorSwatch, query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const tokens = q.split(/\s+/).filter(Boolean);
  const code = color.code.toLowerCase();
  const name = (color.name || "").toLowerCase();
  const compactCode = normalize(color.code);
  const compactName = normalize(color.name || "");

  return tokens.every((token) => {
    const compactToken = normalize(token);
    return (
      code.includes(token) ||
      name.includes(token) ||
      compactCode.includes(compactToken) ||
      compactName.includes(compactToken)
    );
  });
};

const ColorGrid = ({
  colors,
  system,
  onPick,
  highlightMatches,
}: {
  colors: ColorSwatch[];
  system: ColorSystem;
  onPick: (c: ColorSwatch, sys: ColorSystem) => void;
  highlightMatches: boolean;
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
    {colors.map((c) => {
      const light = isLight(c.hex);
      return (
        <button
          type="button"
          key={c.code}
          onClick={() => onPick(c, system)}
          className={`text-left rounded-lg overflow-hidden border shadow-sm hover:shadow-md hover:border-primary/40 transition-all ${
            highlightMatches ? "border-primary ring-2 ring-primary/30 bg-primary/5" : "border-border"
          }`}
        >
          <div
            className="h-20 flex items-end p-2"
            style={{ backgroundColor: c.hex, color: light ? "#000" : "#fff" }}
          >
            <span className="text-xs font-medium">{c.hex.toUpperCase()}</span>
          </div>
          <div className="p-2 bg-card">
            <div className="text-xs font-semibold text-foreground">{c.code}</div>
            {c.name && (
              <div className="text-[11px] text-muted-foreground truncate">{c.name}</div>
            )}
          </div>
        </button>
      );
    })}
  </div>
);

const CombinedColorGrid = ({
  items,
  onPick,
}: {
  items: { color: ColorSwatch; system: ColorSystem }[];
  onPick: (c: ColorSwatch, sys: ColorSystem) => void;
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
    {items.map(({ color, system }) => {
      const light = isLight(color.hex);
      return (
        <button
          type="button"
          key={`${system}-${color.code}`}
          onClick={() => onPick(color, system)}
          className="text-left rounded-lg overflow-hidden border border-primary ring-2 ring-primary/30 bg-primary/5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
        >
          <div
            className="h-20 flex items-end p-2"
            style={{ backgroundColor: color.hex, color: light ? "#000" : "#fff" }}
          >
            <span className="text-xs font-medium">{color.hex.toUpperCase()}</span>
          </div>
          <div className="p-2 bg-card">
            <div className="mb-1 inline-flex rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              {system}
            </div>
            <div className="text-xs font-semibold text-foreground">{color.code}</div>
            {color.name && <div className="text-[11px] text-muted-foreground truncate">{color.name}</div>}
          </div>
        </button>
      );
    })}
  </div>
);

const ProductPage = () => {
  const { productName } = useParams<{ productName: string }>();
  const navigate = useNavigate();
  const name = decodeURIComponent(productName || "");
  const [colorQuery, setColorQuery] = useState("");

  useSeo({
    title: name ? `${name} Colors and Shades | CoatingBazaar` : "Product Colors | CoatingBazaar",
    description: name
      ? `Browse ${name} color options in RAL Classic and Pantone systems for your coating requirement.`
      : "Browse coating product color options in RAL and Pantone systems.",
    canonicalPath: name ? `/product/${encodeURIComponent(name)}` : "/",
    keywords: [name, "RAL colors", "Pantone colors", "paint color chart"].filter(Boolean) as string[],
    noIndex: !name,
  });

  const filteredRal = useMemo(
    () => ralClassic.filter((color) => matchesColorQuery(color, colorQuery)),
    [colorQuery],
  );
  const filteredPantone = useMemo(
    () => pantoneColors.filter((color) => matchesColorQuery(color, colorQuery)),
    [colorQuery],
  );
  const isSearching = colorQuery.trim().length > 0;
  const combinedSearchResults = useMemo(
    () => [
      ...filteredRal.map((color) => ({ color, system: "RAL Classic" as const })),
      ...filteredPantone.map((color) => ({ color, system: "Pantone" as const })),
    ],
    [filteredRal, filteredPantone],
  );

  const pickColor = (c: ColorSwatch, system: ColorSystem) => {
    setSelection({ productName: name, colorSystem: system, colorCode: c.code, colorName: c.name, colorHex: c.hex });
    navigate("/checkout");
  };

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
          {name} — Select Color
        </h1>
        <p className="mt-1 text-sm text-muted-foreground max-w-3xl">
          Choose a color from RAL Classic, Pantone, or search for a custom color.
        </p>
      </div>

      <div className="container pb-16">
        <div className="relative mb-4 max-w-xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={colorQuery}
            onChange={(e) => setColorQuery(e.target.value)}
            placeholder="Search RAL / Pantone code or name (e.g. RAL 9005, Pantone 185)"
            className="h-11 pl-9"
          />
        </div>

        {isSearching ? (
          <div className="mt-6">
            <p className="mb-3 text-sm text-primary">
              Found {combinedSearchResults.length} match{combinedSearchResults.length === 1 ? "" : "es"}
              {" "}across RAL and Pantone for "{colorQuery.trim()}".
            </p>
            {combinedSearchResults.length > 0 ? (
              <CombinedColorGrid items={combinedSearchResults} onPick={pickColor} />
            ) : (
              <p className="py-6 text-sm text-muted-foreground">
                No RAL or Pantone colors match your search.
              </p>
            )}
          </div>
        ) : (
          <Tabs defaultValue="ral" className="w-full">
            <TabsList>
              <TabsTrigger value="ral">RAL Classic ({ralClassic.length})</TabsTrigger>
              <TabsTrigger value="pantone">Pantone ({pantoneColors.length})</TabsTrigger>
              <TabsTrigger value="search">Color Search</TabsTrigger>
            </TabsList>
            <TabsContent value="ral" className="mt-6">
              <ColorGrid colors={ralClassic} system="RAL Classic" onPick={pickColor} highlightMatches={false} />
            </TabsContent>
            <TabsContent value="pantone" className="mt-6">
              <ColorGrid colors={pantoneColors} system="Pantone" onPick={pickColor} highlightMatches={false} />
            </TabsContent>
            <TabsContent value="search" className="mt-6">
              <ColorSearch />
            </TabsContent>
          </Tabs>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
