
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Gurpreet Singh",
    location: "Rajouri Garden, West Delhi",
    rating: 5,
    text: "Swad Sadhna made our Lohri celebration truly special! The sarson ka saag and makki di roti were absolutely delicious. All our guests were impressed. Would 100% recommend!"
  },
  {
    id: 2,
    name: "Neha Sharma",
    location: "Dwarka, South West Delhi",
    rating: 5,
    text: "We ordered the Swad Anmol package for our kitty party. The paneer dishes were outstanding, especially the paneer lababdar! The service was also first-class. Will definitely order again."
  },
  {
    id: 3,
    name: "Rajeev Malhotra",
    location: "Pitampura, North Delhi",
    rating: 4,
    text: "Arranged catering for our office farewell party. The food tasted just like home-cooked meals. The kadhi pakoda and jeera rice combo won everyone's hearts. Delivery was slightly delayed, but overall a great experience."
  },
  {
    id: 4,
    name: "Sunita Iyer",
    location: "Vasant Kunj, South Delhi",
    rating: 5,
    text: "We chose Swad Sadhna's Sarvajanik Bhoj for our Mata ki chowki. All the guests said the food was divine! The rajma chawal and gajar halwa were perfect. Hats off to the team!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-masala-50">
      <div className="section-container">
        <div className="max-w-lg mx-auto text-center mb-16">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <p className="text-masala-700 mt-4">
            Don't just take our word for it - hear what our satisfied customers have to say about our catering services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="content-card p-6 md:p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-spice-500 text-spice-500" />
                ))}
              </div>
              <p className="text-masala-700 italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-spice-100 text-spice-700 flex items-center justify-center font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-masala-900">{testimonial.name}</h4>
                  <p className="text-masala-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
