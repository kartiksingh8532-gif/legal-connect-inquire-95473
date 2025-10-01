import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Scale, Award, Shield, Users, Phone } from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GoogleMaps } from "@/components/GoogleMaps";
import { TermsModal } from "@/components/TermsModal";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showContactButtons, setShowContactButtons] = useState(false);

  useEffect(() => {
    // Check if user has already accepted terms
    const hasAcceptedTerms = localStorage.getItem('vlp-terms-accepted');
    if (!hasAcceptedTerms) {
      setShowTerms(true);
    }
  }, []);

  const handleAcceptTerms = () => {
    localStorage.setItem('vlp-terms-accepted', 'true');
    setShowTerms(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919315788388";
    const message = "Hello, I'd like to get in touch regarding legal services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open("tel:+919315788388", '_self');
  };

  return (
    <div className="min-h-screen bg-white">
      <TermsModal isOpen={showTerms} onAccept={handleAcceptTerms} />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <img 
                src="http://static.wixstatic.com/media/111838_f8741bf659844bd38fba92837dea873d~mv2.png/v1/fill/w_66,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-26%20at%2020_edited.png" 
                alt="Virtuous Law Partners Logo" 
                className="w-16 h-20 object-contain"
              />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <div className="mb-2">Connect with</div>
            <div className="mb-2">Virtuous Law Partners</div>
            <div className="text-3xl md:text-4xl text-amber-300">(Advocates & Solicitors)</div>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Providing comprehensive and tailored legal services with integrity, professionalism, and excellence.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            Get Legal Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-800">About Virtuous Law Partners</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Virtuous Law Partners (VLP), we go beyond traditional legal practice to craft tailored solutions for businesses and individuals. As a registered law firm, our mission is to empower you to navigate the legal landscape with confidence and clarity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Our foundation rests on excellence, integrity, and professionalism. These core values aren't just abstract ideals; they are the driving force behind every interaction and strategic decision we make. We recognize that every client's situation is unique, which is why we specialize in developing customized legal strategies designed to precisely meet your specific needs and objectives.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                What truly sets VLP apart is our unwavering commitment to understanding your challenges and aspirations. Our team of highly skilled and experienced advocates isn't just focused on achieving favorable outcomes; we are dedicated to being your trusted advisors. We diligently leverage our deep legal knowledge to provide the highest level of representation and support, always striving for the best possible results on your behalf.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700 text-lg">Integrity – Upholding highest standards of honesty and ethical behavior</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700 text-lg">Excellence – Committed to achieving excellence in every aspect</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700 text-lg">Client-Centric – Understanding unique challenges and providing personalized solutions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/8537aeda-5e30-4c5e-96a5-64c4acec88cd.png"
                alt="Justice scales representing Virtuous Law Partners"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
          
          {/* Vision & Mission Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Virtuous Law Partners (VLP), our goal is simple: to be the leading and most respected law firm known for our exceptional legal skills, strong integrity, and deep dedication to our clients' success. We want to be the first choice for anyone – individuals or businesses – looking for smart and effective legal help. We aim to set the standard for excellent legal practice and client happiness.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our mission at VLP is to provide unwavering legal support that always puts you, the client, first. We stick to the highest standards of ethics and professionalism. We're committed to understanding your unique needs so we can deliver innovative, practical, and effective legal solutions. Our goal is to meet your objectives and even go beyond your expectations. We strive to be your trusted partner, giving you the confidence to handle any legal challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <GoogleMaps />

      <Footer />

      {/* Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        {/* Desktop View - Show all buttons horizontally */}
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

        {/* Mobile View - Single button with expandable menu */}
        <div className="md:hidden">
          <Button
            onClick={() => setShowContactButtons(!showContactButtons)}
            className="w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          
          {showContactButtons && (
            <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-lg p-4 border-2 border-black">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-black">Contact Us</h3>
                <Button
                  onClick={() => setShowContactButtons(false)}
                  className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 p-0"
                  size="icon"
                >
                  <span className="text-black text-sm">×</span>
                </Button>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    setIsChatOpen(true);
                    setShowContactButtons(false);
                  }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat</span>
                </Button>
                <Button
                  onClick={() => {
                    handleWhatsAppClick();
                    setShowContactButtons(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
                <Button
                  onClick={() => {
                    handleCallClick();
                    setShowContactButtons(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
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

export default Index;
