import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ralClassic, pantoneColors, ColorSwatch } from "@/data/colors";
import ColorSearch from "@/components/ColorSearch";
import { setSelection } from "@/lib/orderSelection";

const isLight = (hex: string) => {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};

const ColorGrid = ({ colors, system, onPick }: { colors: ColorSwatch[]; system: "RAL Classic" | "Pantone"; onPick: (c: ColorSwatch, sys: "RAL Classic" | "Pantone") => void }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
    {colors.map((c) => {
      const light = isLight(c.hex);
      return (
        <button
          type="button"
          key={c.code}
          onClick={() => onPick(c, system)}
          className="text-left rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
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

const ProductPage = () => {
  const { productName } = useParams<{ productName: string }>();
  const navigate = useNavigate();
  const name = decodeURIComponent(productName || "");

  const pickColor = (c: ColorSwatch, system: "RAL Classic" | "Pantone") => {
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
        <Tabs defaultValue="ral" className="w-full">
          <TabsList>
            <TabsTrigger value="ral">RAL Classic ({ralClassic.length})</TabsTrigger>
            <TabsTrigger value="pantone">Pantone ({pantoneColors.length})</TabsTrigger>
            <TabsTrigger value="search">Color Search</TabsTrigger>
          </TabsList>
          <TabsContent value="ral" className="mt-6">
            <ColorGrid colors={ralClassic} system="RAL Classic" onPick={pickColor} />
          </TabsContent>
          <TabsContent value="pantone" className="mt-6">
            <ColorGrid colors={pantoneColors} system="Pantone" onPick={pickColor} />
          </TabsContent>
          <TabsContent value="search" className="mt-6">
            <ColorSearch />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
