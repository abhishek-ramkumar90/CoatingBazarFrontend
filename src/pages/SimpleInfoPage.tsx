import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface SimpleInfoPageProps {
  title: string;
  description: string;
}

const SimpleInfoPage = ({ title, description }: SimpleInfoPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="mt-3 text-muted-foreground">{description}</p>
          <Button className="mt-6">Coming soon</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SimpleInfoPage;

