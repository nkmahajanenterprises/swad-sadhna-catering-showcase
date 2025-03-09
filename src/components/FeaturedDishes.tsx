
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Dish {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

const FeaturedDishes = () => {
  const [activeTab, setActiveTab] = useState("main-course");

  const dishes: Record<string, Dish[]> = {
    "main-course": [
      {
        name: "Paneer Butter Masala",
        description: "Cottage cheese cubes simmered in a rich, creamy tomato gravy with aromatic spices.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Popular", "Creamy"]
      },
      {
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with deep-fried bread, a Delhi street food favorite.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Signature", "Spicy"]
      },
      {
        name: "Dal Makhani",
        description: "Black lentils slow-cooked overnight with butter and cream for a rich texture.",
        image: "https://images.unsplash.com/photo-1628294896516-344152572ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Classic", "Creamy"]
      },
      {
        name: "Mixed Vegetable Korma",
        description: "Seasonal vegetables cooked in a creamy, mildly spiced curry with cashew nuts.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Healthy", "Mild"]
      },
    ],
    "rice": [
      {
        name: "Vegetable Biryani",
        description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Popular", "Aromatic"]
      },
      {
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin seeds and garnished with fresh coriander.",
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Light", "Simple"]
      },
      {
        name: "Kashmiri Pulao",
        description: "Sweet and savory rice dish with dried fruits, nuts, and mild spices.",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Sweet", "Festive"]
      },
    ],
    "bread": [
      {
        name: "Butter Naan",
        description: "Soft, leavened flatbread baked in a tandoor and brushed with butter.",
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Popular", "Buttery"]
      },
      {
        name: "Laccha Paratha",
        description: "Multi-layered whole wheat flatbread, crispy and flaky.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Flaky", "Traditional"]
      },
      {
        name: "Missi Roti",
        description: "Nutritious flatbread made with gram flour and wheat flour with spices.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Healthy", "Spiced"]
      },
    ],
    "dessert": [
      {
        name: "Gajar Ka Halwa",
        description: "Traditional carrot pudding cooked with milk, ghee, and garnished with nuts.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Seasonal", "Sweet"]
      },
      {
        name: "Gulab Jamun",
        description: "Soft, spongy milk-solid balls soaked in rose-flavored sugar syrup.",
        image: "https://images.unsplash.com/photo-1630851840633-f96999247032?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Classic", "Sweet"]
      },
      {
        name: "Rasmalai",
        description: "Soft cottage cheese patties immersed in chilled, creamy milk infused with cardamom.",
        image: "https://images.unsplash.com/photo-1624778776824-68bcc0a3d4e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Premium", "Creamy"]
      },
    ]
  };

  return (
    <section id="dishes" className="py-20 bg-gradient-to-b from-white to-masala-50">
      <div className="section-container">
        <div className="max-w-lg mx-auto text-center mb-12">
          <h2 className="section-title text-center">Our Featured Dishes</h2>
          <p className="text-masala-700 mt-4">
            Explore our selection of authentic North Indian vegetarian dishes prepared with love and tradition
          </p>
        </div>

        <Tabs defaultValue="main-course" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-masala-100">
              <TabsTrigger value="main-course" className="text-sm sm:text-base">Main Course</TabsTrigger>
              <TabsTrigger value="rice" className="text-sm sm:text-base">Rice</TabsTrigger>
              <TabsTrigger value="bread" className="text-sm sm:text-base">Breads</TabsTrigger>
              <TabsTrigger value="dessert" className="text-sm sm:text-base">Desserts</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(dishes).map(([category, categoryDishes]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryDishes.map((dish, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="content-card group"
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <img 
                        src={dish.image} 
                        alt={dish.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 left-2 flex gap-2">
                        {dish.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className={cn(
                              "text-xs font-medium py-1 px-2 rounded-full",
                              tag === "Popular" || tag === "Signature" 
                                ? "bg-spice-500 text-white" 
                                : "bg-white/80 text-masala-800"
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-masala-900 mb-2">{dish.name}</h3>
                      <p className="text-sm text-masala-600 mb-4">{dish.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-masala-700 mb-6">
            These are just a few highlights from our extensive menu. Contact us to discuss your specific preferences.
          </p>
          <Button className="bg-curry-600 hover:bg-curry-700" asChild>
            <a href="#contact">Request Full Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
