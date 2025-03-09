
import { Utensils, Users, Award, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-masala-50">
      <div className="section-container">
        <div className="max-w-lg mx-auto text-center mb-16">
          <h2 className="section-title text-center">About Swad Sadhna</h2>
          <p className="text-masala-700 mt-4">
            Bringing authentic North Indian flavors to your special occasions with our passion for culinary excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-masala-800">
              At <span className="font-semibold text-curry-700">Swad Sadhna</span>, we believe that food is more than just sustenance—it's an experience that brings people together and creates lasting memories.
            </p>
            <p className="text-lg text-masala-800">
              We specialize in authentic North Indian vegetarian cuisine, crafted with love, tradition, and the finest ingredients. Our team of experienced chefs takes pride in preparing delicious, homestyle meals that delight the senses and warm the heart.
            </p>
            <p className="text-lg text-masala-800">
              From intimate gatherings to grand celebrations, we cater to all types of events with personalized service and attention to detail. Our goal is to make your special occasion truly memorable with our exceptional culinary creations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-masala-100">
                <Utensils className="text-spice-600 mb-2" size={24} />
                <h3 className="font-semibold text-masala-900">Authentic Flavors</h3>
                <p className="text-sm text-masala-600 mt-1">Traditional recipes with modern presentations</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-masala-100">
                <Users className="text-spice-600 mb-2" size={24} />
                <h3 className="font-semibold text-masala-900">Gatherings</h3>
                <p className="text-sm text-masala-600 mt-1">Perfect for groups of 10-50 people</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-masala-100">
                <Award className="text-spice-600 mb-2" size={24} />
                <h3 className="font-semibold text-masala-900">Quality Assured</h3>
                <p className="text-sm text-masala-600 mt-1">Premium ingredients for exceptional taste</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-masala-100">
                <MapPin className="text-spice-600 mb-2" size={24} />
                <h3 className="font-semibold text-masala-900">West Delhi</h3>
                <p className="text-sm text-masala-600 mt-1">Serving all across Delhi NCR</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-curry-200 rounded-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-spice-200 rounded-2xl"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-masala-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our catering service" 
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold text-masala-900 mb-2">Perfect For Every Occasion</h3>
              <ul className="space-y-2 text-masala-700">
                <li className="flex items-center gap-2">
                  <span className="text-spice-600">✓</span> Kitty Parties
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-spice-600">✓</span> Satsangs & Spiritual Events
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-spice-600">✓</span> Family Get-togethers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-spice-600">✓</span> Corporate Meetings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-spice-600">✓</span> House Warming Functions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
