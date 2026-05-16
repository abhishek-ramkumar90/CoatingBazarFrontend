import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";

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
      <div className="container pb-16">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-badge-bg">
            <Icon className="h-7 w-7 text-badge-text" />
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            {industry.name} Industry
          </h1>
        </div>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          Explore raw materials, suppliers and live prices for the {industry.name.toLowerCase()} sector.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default IndustryPage;
