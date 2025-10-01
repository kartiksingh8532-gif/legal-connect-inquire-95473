
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  const handleWhatsAppClick = () => {
    const phoneNumber = "919315788388";
    const message = "Hello, I'd like to get in touch regarding legal services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open("tel:+919315788388", '_self');
  };

  return (
    <footer className="bg-black text-white py-16 font-serif">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Logo and Company Info */}
          <div className="bg-white text-black p-6 lg:p-8 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 border-2 border-black flex-shrink-0">
                <img 
                  src="https://static.wixstatic.com/media/111838_735d82c5c92e4a32bd74ce8a4b7a5162~mv2.png/v1/fill/w_297,h_297,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-26%20at%2020_34_edited.png"
                  alt="Virtuous Law Partners Logo"
                  className="w-20 h-20 lg:w-28 lg:h-28 object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-black">VIRTUOUS</h3>
                <p className="text-xl lg:text-2xl text-black font-bold">LAW PARTNERS</p>
                <p className="text-base lg:text-lg text-gray-500">Advocates & Solicitors</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white text-black p-6 lg:p-8 rounded-lg flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-center">Contact Us</h3>
            <div className="space-y-4 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Phone className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-sm sm:text-base break-words">Tel: 9315788388 / 9634705613 / 8810641831</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Mail className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">Email: virtuouslawpartners@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">OUR PRESENCE</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Delhi</li>
              <li>• Allahabad</li>
              <li>• Lucknow</li>
              <li>• Gautam Buddha Nagar – Noida, Greater Noida, Jewar</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">OFFICES</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <p>A-84, Defense Colony, New Delhi</p>
              <p>G-53, SNG Plaza, Knowledge Park II, Greater NOIDA, UP</p>
              <p>Chamber No. 611-612, Lane no. 14, District and Sessions Court, Gautam Buddha Nagar, UP</p>
            </div>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white px-6 lg:px-8 py-3 text-base lg:text-lg flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </Button>
          <Button
            onClick={handleCallClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 text-base lg:text-lg flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Me</span>
          </Button>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="bg-white text-black py-2 px-4 inline-block rounded max-w-full">
            <p className="text-sm font-medium">© VIRTUOUS LAW PARTNERS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
