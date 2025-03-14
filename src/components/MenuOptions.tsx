
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MenuOptions = () => {
  const menuCategories = [
    {
      category: "Sabzi",
      description: "Choose from 16 seasonal options",
      items: [
        "Rajma Masala",
        "Pindi Chole",
        "Dal Makhni",
        "Kadhi Pakoda",
        "Mix Dal",
        "Dal Tadka",
        "Dal Palak",
        "Saag",
        "Palak Chana",
        "Matar Paneer",
        "Paneer Butter Masala",
        "Paneer Lababdar",
        "Kadhai Paneer",
        "Paneer Bhurji",
        "Paneer Do Pyaza",
        "Mix Veg"
      ]
    },
    {
      category: "Rice",
      description: "Fragrant rice preparations",
      items: [
        "Boiled Rice",
        "Jeera Rice",
        "Peas Pulao",
        "Mix Veg Pulao"
      ]
    },
    {
      category: "Breads",
      description: "Freshly prepared authentic breads",
      items: [
        "Tawa Paratha",
        "Lachha Paratha",
        "Mix Paratha",
        "Plain Poori",
        "Palak Poori",
        "Tamatari Poori",
        "Beetroot Poori",
        "Bedmi Poori"
      ]
    },
    {
      category: "Sweets",
      description: "Delicious dessert options",
      items: [
        "Rice Kheer",
        "Sevaiyyan Kheer",
        "Fruit Cream",
        "Kesari Halwa",
        "Moong Dal Halwa",
        "Sooji Halwa",
        "Gajar Halwa"
      ]
    },
    {
      category: "Salads",
      description: "Fresh and crunchy salad options",
      items: [
        "Kachoomar Salad",
        "Garden Salad"
      ]
    },
    {
      category: "Raita/Dahi",
      description: "Yogurt preparations",
      items: [
        "Pineapple Raita",
        "Mix Veg Raita",
        "Pudina Raita",
        "Boondi Raita",
        "Dahi Bhalle"
      ]
    }
  ];

  return (
    <section id="menu-options" className="py-16 bg-masala-50">
      <div className="section-container">
        <div className="max-w-lg mx-auto text-center mb-12">
          <h2 className="section-title text-center">Customize Your Thali</h2>
          <p className="text-masala-700 mt-4">
            Explore our extensive menu options to create your perfect dining experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto content-card bg-white p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {menuCategories.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-masala-900">
                  {category.category} <span className="text-sm font-normal ml-2 text-masala-600">({category.description})</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-md hover:bg-masala-50">
                        <span className="text-spice-600">•</span>
                        <span className="text-masala-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-masala-700 italic mb-4">
              * Menu items are subject to seasonal availability. Our team will confirm your final selections.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <a 
                href="https://wa.me/919818327309" 
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Customize on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuOptions;
