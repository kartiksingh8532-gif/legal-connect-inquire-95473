
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { useState, useEffect } from "react";
import { MessageCircle, Phone, Scale, Building, Users, Shield, Gavel, HandCoins, FileText, User, Globe, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import servicesData from "@/data/services.json";

const Services = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919315788388";
    const message = "Hello, I'd like to book a consultation for legal services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open("tel:+919315788388", '_self');
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const getServiceIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'criminal litigation': return Shield;
      case 'civil & commercial litigation': return Scale;
      case 'consumer disputes': return Users;
      case 'family disputes': return Home;
      case 'debt recovery or settlement': return HandCoins;
      case 'arbitration': return Gavel;
      case 'real estate matters': return Building;
      case 'trademark & copyright': return FileText;
      case 'pro bono matters': return Users;
      case 'development authorities advisory': return Building;
      case 'property title search & due diligence': return Globe;
      default: return Scale;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Comprehensive legal services tailored to meet your specific needs across various practice areas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service) => {
              const IconComponent = getServiceIcon(service.title);
              return (
                <Card 
                  key={service.id} 
                  className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden cursor-pointer"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    <Button className="mt-4 bg-black hover:bg-gray-800 text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        {/* Desktop - Show all buttons horizontally */}
        <div className="hidden md:flex space-x-3">
          <Button
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button
            onClick={handleWhatsAppClick}
            className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button
            onClick={handleCallClick}
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
            size="icon"
          >
            <Phone className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile - Show expandable button */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          
          {isContactOpen && (
            <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex flex-col space-y-2">
                <Button
                  onClick={() => {
                    setIsChatOpen(true);
                    setIsContactOpen(false);
                  }}
                  className="bg-amber-600 hover:bg-amber-700 text-white text-sm"
                  size="sm"
                >
                  Live Chat
                </Button>
                <Button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsContactOpen(false);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm"
                  size="sm"
                >
                  WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    handleCallClick();
                    setIsContactOpen(false);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
                  size="sm"
                >
                  Call
                </Button>
                <Button
                  onClick={() => setIsContactOpen(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white text-sm"
                  size="sm"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Services;
