
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Leaf, Carrot, Cherry, Cake, CakeSlice } from "lucide-react";

interface Dish {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

const FeaturedDishes = () => {
  const [activeTab, setActiveTab] = useState("sabzi");

  const dishes: Record<string, Dish[]> = {
    "sabzi": [
      {
        name: "Rajma Masala",
        description: "Kidney beans simmered in an aromatic tomato-based gravy with traditional spices.",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Popular", "Protein-rich"]
      },
      {
        name: "Pindi Chole",
        description: "Chickpeas cooked Punjabi-style with a rich blend of spices and a tangy finish.",
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
        name: "Kadhi Pakoda",
        description: "Gram flour dumplings in a yogurt-based tangy curry, tempered with aromatic spices.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Comfort Food", "Tangy"]
      },
      {
        name: "Mix Dal",
        description: "A wholesome blend of various lentils cooked with mild spices and ghee.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Healthy", "Protein-rich"]
      },
      {
        name: "Dal Tadka",
        description: "Yellow lentils tempered with cumin, garlic, and whole red chilies.",
        image: "https://images.unsplash.com/photo-1628294896516-344152572ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Simple", "Comforting"]
      },
      {
        name: "Dal Palak",
        description: "Yellow lentils cooked with fresh spinach puree for added nutrition and flavor.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Healthy", "Nutritious"]
      },
      {
        name: "Saag",
        description: "A medley of seasonal leafy greens cooked with mild spices and a touch of cream.",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Seasonal", "Nutritious"]
      },
      {
        name: "Palak Chana",
        description: "Chickpeas cooked in a spinach puree, spiced with traditional North Indian flavors.",
        image: "https://images.unsplash.com/photo-1628294896516-344152572ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Protein-rich", "Healthy"]
      },
      {
        name: "Matar Paneer",
        description: "Fresh cottage cheese and green peas in a tomato-based gravy with aromatic spices.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Popular", "Mild"]
      },
      {
        name: "Paneer Butter Masala",
        description: "Cottage cheese cubes simmered in a rich, creamy tomato gravy with aromatic spices.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Popular", "Creamy"]
      },
      {
        name: "Paneer Lababdar",
        description: "Paneer in a rich, creamy tomato gravy finished with cashew paste and cream.",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Rich", "Premium"]
      },
      {
        name: "Kadhai Paneer",
        description: "Cottage cheese cooked with bell peppers in a spicy, tangy gravy with whole spices.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Spicy", "Popular"]
      },
      {
        name: "Paneer Bhurji",
        description: "Crumbled cottage cheese sautéed with onions, tomatoes, and bell peppers.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Dry", "Quick"]
      },
      {
        name: "Paneer Do Pyaza",
        description: "Cottage cheese with layers of onions in a medium-spiced tomato gravy.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Flavorful", "Medium-spicy"]
      },
      {
        name: "Mix Veg",
        description: "A colorful medley of seasonal vegetables cooked in a light, aromatic gravy.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Healthy", "Mild"]
      }
    ],
    "rice": [
      {
        name: "Boiled Rice",
        description: "Perfectly cooked plain basmati rice that pairs well with any curry or dal.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Simple", "Plain"]
      },
      {
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin seeds and garnished with fresh coriander.",
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Light", "Simple"]
      },
      {
        name: "Peas Pulao",
        description: "Fragrant basmati rice cooked with green peas and whole spices.",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Aromatic", "Mild"]
      },
      {
        name: "Mix Veg Pulao",
        description: "Basmati rice cooked with an assortment of seasonal vegetables and whole spices.",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Flavorful", "Colorful"]
      }
    ],
    "bread": [
      {
        name: "Tawa Paratha",
        description: "Whole wheat flatbread cooked on a griddle with a touch of ghee.",
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Simple", "Everyday"]
      },
      {
        name: "Lachha Paratha",
        description: "Multi-layered whole wheat flatbread, crispy and flaky.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Flaky", "Traditional"]
      },
      {
        name: "Mix Paratha",
        description: "Stuffed flatbread with a spiced vegetable filling, crisp on the outside.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Stuffed", "Filling"]
      },
      {
        name: "Plain Poori",
        description: "Deep-fried whole wheat bread that puffs up beautifully when cooked.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Fried", "Puffy"]
      },
      {
        name: "Palak Poori",
        description: "Deep-fried bread made with a blend of wheat flour and spinach puree.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Colorful", "Nutritious"]
      },
      {
        name: "Tamatari Poori",
        description: "Deep-fried bread infused with tomato puree for a tangy flavor and vibrant color.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Tangy", "Colorful"]
      },
      {
        name: "Beetroot Poori",
        description: "Vibrant, deep-fried bread made with beetroot puree for natural color and flavor.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Colorful", "Nutritious"]
      },
      {
        name: "Bedmi Poori",
        description: "Traditional crispy fried bread with a spiced urad dal filling, a Delhi specialty.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Specialty", "Spicy"]
      }
    ],
    "raita": [
      {
        name: "Pineapple Raita",
        description: "Sweetened yogurt with chunks of fresh pineapple, a refreshing side.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Sweet", "Refreshing"]
      },
      {
        name: "Mix Veg Raita",
        description: "Yogurt blended with cucumbers, tomatoes, and other finely chopped vegetables.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Fresh", "Cooling"]
      },
      {
        name: "Pudina Raita",
        description: "Cool yogurt flavored with fresh mint and mild spices.",
        image: "https://images.unsplash.com/photo-1626132627291-a995e6d32557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Refreshing", "Aromatic"]
      },
      {
        name: "Boondi Raita",
        description: "Yogurt with tiny fried gram flour balls, a popular accompaniment to biryani.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Traditional", "Textured"]
      },
      {
        name: "Dahi Bhalle",
        description: "Soft lentil dumplings soaked in seasoned yogurt with tangy tamarind chutney.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Popular", "Street Food"]
      }
    ],
    "dessert": [
      {
        name: "Rice Kheer",
        description: "Slow-cooked rice pudding with milk, sugar, and aromatic cardamom and saffron.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Classic", "Creamy"]
      },
      {
        name: "Sevaiyyan Kheer",
        description: "Vermicelli cooked in sweetened milk with nuts and flavored with cardamom.",
        image: "https://images.unsplash.com/photo-1624778776824-68bcc0a3d4e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Light", "Festive"]
      },
      {
        name: "Fruit Cream",
        description: "Fresh seasonal fruits folded into sweetened whipped cream, a light dessert.",
        image: "https://images.unsplash.com/photo-1630851840633-f96999247032?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Fresh", "Light"]
      },
      {
        name: "Kesari Halwa",
        description: "Semolina pudding infused with saffron, garnished with nuts and raisins.",
        image: "https://images.unsplash.com/photo-1624778776824-68bcc0a3d4e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Golden", "Rich"]
      },
      {
        name: "Moong Dal Halwa",
        description: "Luxurious pudding made from yellow lentils, ghee, and sugar, a winter specialty.",
        image: "https://images.unsplash.com/photo-1630851840633-f96999247032?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Rich", "Winter Special"]
      },
      {
        name: "Sooji Halwa",
        description: "Classic semolina pudding cooked with ghee and garnished with nuts.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Quick", "Simple"]
      },
      {
        name: "Gajar Halwa",
        description: "Traditional carrot pudding slow-cooked with milk, ghee, and garnished with nuts.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Seasonal", "Winter Special"]
      }
    ]
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    "sabzi": <Leaf className="mr-2 h-5 w-5" />,
    "rice": <Carrot className="mr-2 h-5 w-5" />,
    "bread": <Cherry className="mr-2 h-5 w-5" />,
    "raita": <Cake className="mr-2 h-5 w-5" />,
    "dessert": <CakeSlice className="mr-2 h-5 w-5" />
  };

  const categoryLabels: Record<string, string> = {
    "sabzi": "Sabziyaan",
    "rice": "Chawal",
    "bread": "Rotiyan",
    "raita": "Raita / Bhalle",
    "dessert": "Meetha"
  };

  return (
    <section id="dishes" className="py-20 bg-gradient-to-b from-white to-masala-50">
      <div className="section-container">
        <div className="max-w-lg mx-auto text-center mb-12">
          <h2 className="section-title text-center">Our Menu Selection</h2>
          <p className="text-masala-700 mt-4">
            Explore our authentic North Indian vegetarian dishes, prepared with love and tradition
          </p>
        </div>

        <Tabs defaultValue="sabzi" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="bg-masala-100 flex-wrap">
              {Object.entries(categoryLabels).map(([value, label]) => (
                <TabsTrigger 
                  key={value} 
                  value={value} 
                  className="text-sm sm:text-base flex items-center"
                >
                  {categoryIcons[value]}
                  {label}
                </TabsTrigger>
              ))}
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
            We offer these delicious dishes for catering events with 50-100 guests. Contact us to customize your perfect menu.
          </p>
          <Button className="bg-curry-600 hover:bg-curry-700" asChild>
            <a href="#contact">Request Custom Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
