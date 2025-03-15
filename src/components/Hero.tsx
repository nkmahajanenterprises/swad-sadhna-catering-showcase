
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1505932794964-de6e3777ff44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-spice-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-curry-100 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-spice-800 leading-tight">
            Authentic North Indian
            <span className="block text-curry-600">Catering Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-masala-800 mb-8 max-w-lg">
            Delight your guests with exquisite vegetarian cuisine crafted with love and tradition for all your special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-spice-600 hover:bg-spice-700 text-white rounded-full">
              <a href="#packages">Explore Packages</a>
            </Button>
            <Button size="lg" variant="outline" className="border-curry-600 text-curry-700 hover:bg-curry-50 rounded-full">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-masala-200 flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-masala-500">★</span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★★★★★</span>
                <span className="font-medium">5.0</span>
              </div>
              <p className="text-sm text-masala-600">100+ Satisfied Customers</p>
            </div>
          </div>
        </div>
        {/* Removed the circular image that was here */}
      </div>
    </section>
  );
};

export default Hero;
