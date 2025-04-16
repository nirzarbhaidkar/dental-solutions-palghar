
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ServicePage from "./components/ServicePage";
import NRICorner from "./pages/NRICorner";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/services/:serviceSlug" element={<ServicePage />} />
              <Route path="/nri-corner" element={<NRICorner />} />
              <Route path="/find-dentist-near-me" element={<Index />} />
              <Route path="/best-dentist-palghar" element={<Index />} />
              <Route path="/dental-clinic-near-me" element={<Index />} />
              <Route path="/mouth-doctor-palghar" element={<Index />} />
              <Route path="/x-ray-dental-services" element={<Index />} />
              <Route path="/nri-dental-care" element={<NRICorner />} />
              <Route path="/nri-dental-services" element={<NRICorner />} />
              
              {/* Catch all blog-like paths for better error handling */}
              <Route path="/blog/*" element={<NotFound />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
