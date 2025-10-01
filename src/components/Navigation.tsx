
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import servicesData from "@/data/services.json";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/#about");
    setIsMenuOpen(false);
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "About VLP", href: "#about", isSpecial: true },
    { name: "Team VLP", href: "/team" },
    { name: "VLP Services", href: "/services", isDropdown: true },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "Contact VLP", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black font-serif">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 min-w-0 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 border-black flex-shrink-0">
              <img 
                src="http://static.wixstatic.com/media/111838_f8741bf659844bd38fba92837dea873d~mv2.png/v1/fill/w_66,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-26%20at%2020_edited.png" 
                alt="Virtuous Law Partners Logo" 
                className="w-6 h-7 sm:w-8 sm:h-9 object-contain"
              />
            </div>
            <div className="min-w-0">
              <span className="font-black text-black text-xs sm:text-sm block truncate">VIRTUOUS LAW PARTNERS</span>
              <div className="text-xs text-gray-600 hidden sm:block font-bold">Advocates & Solicitors</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isSpecial ? (
                <button
                  key={item.name}
                  onClick={handleAboutClick}
                  className="text-black hover:text-gray-600 font-bold transition-colors text-sm"
                >
                  {item.name}
                </button>
              ) : item.isDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-black hover:text-gray-600 font-bold transition-colors flex items-center text-sm"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border-2 border-black rounded-lg shadow-lg p-4 grid grid-cols-2 gap-2 z-50">
                      {servicesData.services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceClick(service.id)}
                          className="text-sm text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded transition-colors text-left font-semibold"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-black hover:text-gray-600 font-bold transition-colors text-sm"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t-2 border-black max-h-80 overflow-y-auto">
            {navItems.map((item) => (
              item.isSpecial ? (
                <button
                  key={item.name}
                  onClick={handleAboutClick}
                  className="block py-3 text-black hover:text-gray-600 font-bold transition-all duration-200 w-full text-left transform hover:translate-x-2"
                >
                  {item.name}
                </button>
              ) : item.isDropdown ? (
                <div key={item.name} className="py-3">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="block text-black hover:text-gray-600 font-bold transition-all duration-200 transform hover:translate-x-2 flex items-center w-full text-left"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 mt-2 space-y-1">
                      {servicesData.services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceClick(service.id)}
                          className="block text-sm text-gray-600 hover:text-black py-2 text-left w-full font-semibold"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-3 text-black hover:text-gray-600 font-bold transition-all duration-200 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
