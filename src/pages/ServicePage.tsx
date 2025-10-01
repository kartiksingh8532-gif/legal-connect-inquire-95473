
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesData from "@/data/services.json";

const ServicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [service, setService] = useState(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const foundService = servicesData.services.find(s => s.id === id);
    if (foundService) {
      setService(foundService);
    } else {
      navigate("/404");
    }
  }, [id, navigate]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919315788388";
    const message = `Hello, I'd like to get consultation for ${service?.title} services.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open("tel:+919315788388", '_self');
  };

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => navigate("/services")}
            className="mb-6 bg-transparent hover:bg-white/10 text-white border border-white/20 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Button>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-amber-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />
              
              {/* Contact CTA */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Need Expert Legal Consultation?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our experienced legal team is ready to help you navigate through your {service.title.toLowerCase()} matters. 
                  Get personalized advice and strategic legal solutions tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Consultation
                  </Button>
                  <Button 
                    onClick={handleCallClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Services Include</h2>
              <div className="space-y-6">
                {service.details.map((section, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Chat Widget */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsChatOpen(true)}
          className="w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default ServicePage;
