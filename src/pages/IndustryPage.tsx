import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { industries } from "@/data/industries";
import { ralClassic, pantoneColors, ColorSwatch } from "@/data/colors";

const isLight = (hex: string) => {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};

const ColorGrid = ({ colors }: { colors: ColorSwatch[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
    {colors.map((c) => {
      const light = isLight(c.hex);
      return (
        <div
          key={c.code}
          className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
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
        </div>
      );
    })}
  </div>
);

const IndustryPage = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = industries.find((i) => i.id === industryId);

  if (!industry) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-display font-bold">Industry not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-4">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
      </div>
      <div className="container pb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-badge-bg">
            <Icon className="h-7 w-7 text-badge-text" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {industry.name} Industry
            </h1>
            <p className="text-sm text-muted-foreground">
              Color references for the {industry.name.toLowerCase()} sector.
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <Tabs defaultValue="ral" className="w-full">
          <TabsList>
            <TabsTrigger value="ral">RAL Classic ({ralClassic.length})</TabsTrigger>
            <TabsTrigger value="pantone">Pantone ({pantoneColors.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="ral" className="mt-6">
            <ColorGrid colors={ralClassic} />
          </TabsContent>
          <TabsContent value="pantone" className="mt-6">
            <ColorGrid colors={pantoneColors} />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default IndustryPage;
