import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CategoriesGrid from "@/components/CategoriesGrid";
import ProductsGrid from "@/components/ProductsGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <CategoriesGrid />
    <ProductsGrid />
    <WhyChooseUs />
    <Footer />
  </div>
);

export default Index;
