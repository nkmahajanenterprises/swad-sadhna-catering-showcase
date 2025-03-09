
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, InstagramIcon, TwitterIcon, PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-masala-900 text-white pt-16 pb-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-spice">
              Swad <span className="text-spice-400">Sadhna</span>
            </h3>
            <p className="text-masala-300 mb-6">
              Authentic North Indian vegetarian catering service for all your special occasions and gatherings.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-spice-400 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-spice-400 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-spice-400 transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-masala-300 hover:text-spice-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-masala-300 hover:text-spice-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#packages" className="text-masala-300 hover:text-spice-400 transition-colors">Packages</a>
              </li>
              <li>
                <a href="#dishes" className="text-masala-300 hover:text-spice-400 transition-colors">Our Dishes</a>
              </li>
              <li>
                <a href="#contact" className="text-masala-300 hover:text-spice-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <PhoneCall size={18} className="text-spice-400 mt-1 shrink-0" />
                <span className="text-masala-300">+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-spice-400 mt-1 shrink-0" />
                <span className="text-masala-300">info@swadsadhna.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-spice-400 mt-1 shrink-0" />
                <span className="text-masala-300">
                  Rajouri Garden, West Delhi, Delhi NCR, India
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-masala-300 mb-4">
              Subscribe to receive updates on special offers and new menu items.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your Email" 
                className="bg-masala-800 border-masala-700 focus-visible:ring-spice-500" 
              />
              <Button className="bg-spice-600 hover:bg-spice-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-masala-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-masala-400 text-sm">
              &copy; {new Date().getFullYear()} Swad Sadhna Catering. All Rights Reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-masala-400 hover:text-spice-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-masala-400 hover:text-spice-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
