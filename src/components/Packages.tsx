
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PackageProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PackageCard = ({ title, price, description, features, popular = false }: PackageProps) => {
  return (
    <div className={cn(
      "content-card p-6 md:p-8 relative h-full flex flex-col",
      popular && "border-spice-500 border-2"
    )}>
      {popular && (
        <div className="absolute top-0 right-0 bg-spice-500 text-white py-1 px-3 text-sm font-semibold rounded-bl-lg rounded-tr-xl">
          Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-masala-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-spice-700">₹{price}</span>
        <span className="text-masala-600 ml-1">/ plate</span>
      </div>
      <p className="text-masala-700 mb-6">{description}</p>
      
      <div className="flex-grow">
        <h4 className="font-semibold text-masala-800 mb-3">What's included:</h4>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="text-spice-600 shrink-0 mt-1" size={18} />
              <span className="text-masala-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={cn(
          "w-full mt-6", 
          popular 
            ? "bg-spice-600 hover:bg-spice-700" 
            : "bg-masala-100 text-masala-800 hover:bg-masala-200"
        )}
        asChild
      >
        <a href="https://wa.me/919818327309">Customize on WhatsApp</a>
      </Button>
    </div>
  );
};

const Packages = () => {
  const packages = [
    {
      title: "Sarvajanik Bhoj",
      price: "399",
      description: "Essential catering package for modest gatherings and budget-conscious events.",
      features: [
        "2 Sabzi (choose from 16 seasonal options)",
        "Rice (boiled, jeera, peas pulao, or mix veg pulao)",
        "3 Breads (paratha/poori/roti – 8 varieties)",
        "Salad (kachoomar or garden salad)",
        "1 Sweet Dish OR Raita/Bhalle (choose 1)"
      ],
      popular: false
    },
    {
      title: "Swad Anmol",
      price: "499",
      description: "Our most popular package for medium-sized gatherings and special occasions.",
      features: [
        "3 Sabzi (choose from 16 seasonal options)",
        "Rice (boiled, jeera, peas pulao, or mix veg pulao)",
        "3 Breads (paratha/poori/roti – 8 varieties)",
        "Salad (kachoomar or garden salad)",
        "Raita/Bhalle (5 raita options or dahi bhalle)"
      ],
      popular: true
    },
    {
      title: "Shahi Dawat",
      price: "599",
      description: "Premium catering experience for special celebrations and memorable events.",
      features: [
        "3 Sabzi (choose from 16 seasonal options)",
        "Rice (boiled, jeera, peas pulao, or mix veg pulao)",
        "3 Breads (paratha/poori/roti – 8 varieties)",
        "Salad (kachoomar or garden salad)",
        "1 Sweet Dish (7 options)",
        "Raita/Bhalle (5 raita options or dahi bhalle)"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20">
      <div className="section-container">
        <div className="max-w-lg mx-auto text-center mb-16">
          <h2 className="section-title text-center">Our Catering Packages</h2>
          <p className="text-masala-700 mt-4">
            Choose from our carefully crafted packages designed to suit various occasions and budgets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>

        <div className="mt-12 p-8 bg-masala-50 rounded-xl">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h3 className="text-xl font-bold text-masala-900 mb-2">Customize Your Thali!</h3>
              <p className="text-masala-700 mb-6 md:mb-0">
                Choose from our extensive menu options including 16 seasonal sabzis, various rice preparations, 
                authentic breads, sweets, salads, and raita options. Finalize your menu via WhatsApp!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#25D366] hover:bg-[#1da851]" asChild>
                <a href="https://wa.me/919818327309" className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Customize on WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+919818327309" className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-masala-700">
            Serving Delhi-NCR for gatherings of 50-100 guests. Our team will confirm 
            availability and delivery details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
