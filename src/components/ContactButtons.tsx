
import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatWidget } from "@/components/ChatWidget";

export const ContactButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919315788388";
    const message = "Hello, I'd like to get in touch regarding legal services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open("tel:+919315788388", '_self');
  };

  return (
    <>
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50">
        {/* Desktop - Show all buttons horizontally */}
        <div className="hidden md:flex space-x-3">
          <Button
            onClick={() => setIsChatOpen(true)}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            onClick={handleWhatsAppClick}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            onClick={handleCallClick}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
            size="icon"
          >
            <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
        </div>

        {/* Mobile - Show expandable button */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          
          {isContactOpen && (
            <div className="absolute bottom-14 sm:bottom-16 left-0 bg-white rounded-lg shadow-lg p-3 sm:p-4 border max-w-xs">
              <div className="flex flex-col space-y-2">
                <Button
                  onClick={() => {
                    setIsChatOpen(true);
                    setIsContactOpen(false);
                  }}
                  className="bg-amber-600 hover:bg-amber-700 text-white text-sm w-full"
                  size="sm"
                >
                  Live Chat
                </Button>
                <Button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsContactOpen(false);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm w-full"
                  size="sm"
                >
                  WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    handleCallClick();
                    setIsContactOpen(false);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm w-full"
                  size="sm"
                >
                  Call
                </Button>
                <Button
                  onClick={() => setIsContactOpen(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white text-sm w-full"
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
    </>
  );
};
