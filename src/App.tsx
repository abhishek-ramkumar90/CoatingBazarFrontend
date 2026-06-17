import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import AllPricesPage from "./pages/AllPricesPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import IndustryPage from "./pages/IndustryPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import CustomSolutionsPage from "./pages/CustomSolutionsPage.tsx";
import BuildYourPaintShopPage from "./pages/BuildYourPaintShopPage.tsx";
import EnterIndiaPage from "./pages/EnterIndiaPage.tsx";
import SimpleInfoPage from "./pages/SimpleInfoPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prices" element={<AllPricesPage />} />
          <Route path="/knowledge-hub" element={<SimpleInfoPage title="Knowledge Hub" description="Articles, technical notes, and coating insights are being prepared." />} />
          <Route path="/custom-solutions" element={<CustomSolutionsPage />} />
          <Route path="/build-your-paint-shop" element={<BuildYourPaintShopPage />} />
          <Route path="/enter-india" element={<EnterIndiaPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/industry/:industryId" element={<IndustryPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
