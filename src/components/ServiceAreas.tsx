
import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    {
      region: "West Delhi",
      localities: ["Rajouri Garden", "Janakpuri", "Vikaspuri", "Dwarka", "Paschim Vihar", "Punjabi Bagh"]
    },
    {
      region: "North Delhi",
      localities: ["Model Town", "Civil Lines", "Rohini", "Pitampura", "Ashok Vihar"]
    },
    {
      region: "South Delhi",
      localities: ["Vasant Kunj", "Saket", "Greater Kailash", "South Extension", "Lajpat Nagar", "Defence Colony"]
    },
    {
      region: "East Delhi",
      localities: ["Mayur Vihar", "Laxmi Nagar", "Preet Vihar", "Vivek Vihar"]
    },
    {
      region: "Central Delhi",
      localities: ["Connaught Place", "Karol Bagh", "Patel Nagar"]
    },
    {
      region: "Gurgaon",
      localities: ["DLF Phase 1-5", "Sushant Lok", "Sector 14"]
    },
    {
      region: "Noida",
      localities: ["Sector 18", "Sector 62", "Greater Noida"]
    },
    {
      region: "Ghaziabad",
      localities: ["Indirapuram", "Vaishali", "Crossings Republik"]
    }
  ];

  return (
    <section className="py-16 bg-masala-50">
      <div className="section-container">
        <div className="max-w-lg mx-auto text-center mb-12">
          <h2 className="section-title text-center">Service Areas</h2>
          <p className="text-masala-700 mt-4">
            We provide catering services across Delhi NCR, with special focus on West Delhi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="content-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-spice-600" size={20} />
                <h3 className="text-lg font-semibold text-masala-900">{area.region}</h3>
              </div>
              <ul className="space-y-1">
                {area.localities.map((locality, idx) => (
                  <li key={idx} className="text-masala-700 text-sm">
                    • {locality}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-masala-700 italic">
            * Additional travel charges may apply for locations outside Delhi NCR
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
