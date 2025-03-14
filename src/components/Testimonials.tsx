
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Gurpreet Singh",
    location: "Rajouri Garden, West Delhi",
    rating: 5,
    text: "Swad Sadhna ne hamare Lohri celebration ko ekdum special bana diya! Sarson ka saag aur makki di roti bahut tasty thi. Sabhi mehmaano ne khoob tareef ki. 100% recommend karunga!"
  },
  {
    id: 2,
    name: "Neha Sharma",
    location: "Dwarka, South West Delhi",
    rating: 5,
    text: "Humne apni kitty party ke liye Swad Anmol package order kiya tha. Paneer dishes zabardast thi, especially paneer lababdar! Service bhi first class. Definitely dobara order karenge."
  },
  {
    id: 3,
    name: "Rajeev Malhotra",
    location: "Pitampura, North Delhi",
    rating: 4,
    text: "Office ke farewell party ke liye catering arrange ki thi. Khaana bilkul ghar jaisa tha. Kadhi pakoda aur jeera rice combo ne dil jeet liya. Thoda late delivery hui, but overall great experience."
  },
  {
    id: 4,
    name: "Sunita Iyer",
    location: "Vasant Kunj, South Delhi",
    rating: 5,
    text: "Mata ki chowki ke liye Swad Sadhna ka Sarvajanik Bhoj liya tha. Sabhi guests ne kaha ki khana divine tha! Rajma chawal and gajar halwa perfect tha. Hats off to the team!"
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
