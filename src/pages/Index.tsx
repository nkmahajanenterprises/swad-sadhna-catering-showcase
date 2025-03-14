
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import MenuOptions from "@/components/MenuOptions";
import FeaturedDishes from "@/components/FeaturedDishes";
import ServiceAreas from "@/components/ServiceAreas";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    document.title = "Swad Sadhna - Authentic North Indian Catering";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Packages />
        <MenuOptions />
        <FeaturedDishes />
        <ServiceAreas />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
