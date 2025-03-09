
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
        <span className="text-masala-600 ml-1">/ person</span>
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
        <a href="#contact">Book This Package</a>
      </Button>
    </div>
  );
};

const Packages = () => {
  const packages = [
    {
      title: "Essential Package",
      price: "300",
      description: "Perfect for small gatherings and intimate events.",
      features: [
        "3 Main Course Dishes",
        "2 Types of Bread",
        "1 Rice Dish",
        "1 Dessert",
        "Salad & Papad",
        "Basic Serving Setup"
      ],
      popular: false
    },
    {
      title: "Premium Package",
      price: "450",
      description: "Our most popular option for medium-sized events.",
      features: [
        "4 Main Course Dishes",
        "3 Types of Bread",
        "2 Rice Dishes",
        "2 Desserts",
        "Salad, Papad & Pickle",
        "Welcome Drink",
        "Professional Serving Setup"
      ],
      popular: true
    },
    {
      title: "Luxury Package",
      price: "600",
      description: "The ultimate culinary experience for special occasions.",
      features: [
        "6 Main Course Dishes",
        "4 Types of Bread",
        "2 Rice Dishes",
        "3 Desserts",
        "Salad, Papad & Pickle",
        "Welcome Drink & Starters",
        "Premium Serving Setup",
        "Dedicated Service Staff"
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

        <div className="mt-12 text-center p-8 bg-masala-50 rounded-xl">
          <h3 className="text-xl font-bold text-masala-900 mb-2">Need a Custom Package?</h3>
          <p className="text-masala-700 mb-6">
            We understand that every event is unique. Contact us to create a personalized catering package that perfectly suits your needs.
          </p>
          <Button className="bg-curry-600 hover:bg-curry-700" asChild>
            <a href="#contact">Request Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
