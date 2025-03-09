
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold font-spice text-spice-800">
            Swad <span className="text-curry-600">Sadhna</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-masala-900 hover:text-spice-600 font-medium transition-colors">Home</a>
          <a href="#about" className="text-masala-900 hover:text-spice-600 font-medium transition-colors">About</a>
          <a href="#packages" className="text-masala-900 hover:text-spice-600 font-medium transition-colors">Packages</a>
          <a href="#dishes" className="text-masala-900 hover:text-spice-600 font-medium transition-colors">Dishes</a>
          <a href="#contact" className="text-masala-900 hover:text-spice-600 font-medium transition-colors">Contact</a>
        </nav>

        <Button 
          className="hidden md:flex bg-spice-600 hover:bg-spice-700"
          asChild
        >
          <a href="#contact">Book Catering</a>
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-masala-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-x-0 bg-white shadow-lg transition-all duration-300 ease-in-out",
        isMenuOpen ? "top-[60px] opacity-100" : "top-[-100%] opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-masala-900 hover:text-spice-600 py-2 font-medium"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-masala-900 hover:text-spice-600 py-2 font-medium"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#packages" 
            className="text-masala-900 hover:text-spice-600 py-2 font-medium"
            onClick={toggleMenu}
          >
            Packages
          </a>
          <a 
            href="#dishes" 
            className="text-masala-900 hover:text-spice-600 py-2 font-medium"
            onClick={toggleMenu}
          >
            Dishes
          </a>
          <a 
            href="#contact" 
            className="text-masala-900 hover:text-spice-600 py-2 font-medium"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <Button 
            className="w-full bg-spice-600 hover:bg-spice-700"
            asChild
            onClick={toggleMenu}
          >
            <a href="#contact">Book Catering</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
