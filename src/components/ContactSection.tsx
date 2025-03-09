
import { useState } from "react";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest! We'll contact you shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      guestCount: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="max-w-lg mx-auto text-center mb-16">
          <h2 className="section-title text-center">Contact Us</h2>
          <p className="text-masala-700 mt-4">
            Get in touch to discuss your catering needs or to book our services for your upcoming event
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="content-card p-6">
              <h3 className="text-xl font-semibold text-masala-900 mb-4">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-spice-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-masala-900">Phone</h4>
                    <p className="text-masala-700">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-spice-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-masala-900">Email</h4>
                    <p className="text-masala-700">info@swadsadhna.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-spice-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-masala-900">Business Hours</h4>
                    <p className="text-masala-700">Mon-Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-masala-700">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-card p-6">
              <h3 className="text-xl font-semibold text-masala-900 mb-4">Book in Advance</h3>
              <p className="text-masala-700">
                We recommend booking our catering services at least 1 week in advance to ensure availability. For large events (30+ people), please book 2-3 weeks in advance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="content-card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-masala-900 mb-6">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Full Name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="Contact Number" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input 
                      id="eventDate" 
                      name="eventDate" 
                      type="date" 
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <select 
                      id="eventType" 
                      name="eventType" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      <option value="">Select Event Type</option>
                      <option value="Kitty Party">Kitty Party</option>
                      <option value="Satsang">Satsang</option>
                      <option value="Family Gathering">Family Gathering</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guestCount">Number of Guests</Label>
                    <Input 
                      id="guestCount" 
                      name="guestCount" 
                      placeholder="Approx. Guest Count" 
                      value={formData.guestCount}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your event and any specific requirements..." 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto bg-spice-600 hover:bg-spice-700">
                  <Send className="mr-2" size={16} />
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
