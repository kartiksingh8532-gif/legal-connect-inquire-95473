import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Navigation as NavigationIcon } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactButtons } from "@/components/ContactButtons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const officeLocations = [
    {
      name: "Defence Colony, Delhi",
      url: "https://www.google.com/maps/dir/?api=1&destination=Defence%20Colony,%20New%20Delhi,%20Delhi,%20India"
    },
    {
      name: "Ghaziabad, Uttar Pradesh",
      url: "https://www.google.com/maps/dir/12.677359,77.4622982/Ghaziabad,+Uttar+Pradesh/@28.6671132,77.4152147,12.68z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390cf1bb41c50fdf:0xe6f06fd26a7798ba!2m2!1d77.4537578!2d28.6691565?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Gurugram, Haryana",
      url: "https://www.google.com/maps/dir/?api=1&destination=Chamber%20no%20358%20A%20block%20Distt%20and%20session%20Court,%20Shaheed%20Sukhdev%20Block,%20Shanti%20Nagar,%20Shivaji%20Nagar,%20Sector%2011,%20Gurugram,%20Haryana%20122001,%20India"
    },
    {
      name: "Noida, Delhi",
      url: "https://www.google.com/maps/dir/?api=1&destination=GF3J%2BVPM,%20Main%20Rd,%20Ecotech-II,%20Udyog%20Vihar,%20Greater%20Noida,%20Uttar%20Pradesh%20201306,%20India"
    },
    {
      name: "Greater Noida, Delhi",
      url: "https://www.google.com/maps/dir/?api=1&destination=Knowledge%20Park%20II,%20Greater%20Noida,%20Uttar%20Pradesh%20201310,%20India"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "919315788388";
    const message = "Hello, I'd like to get in touch regarding legal services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open("tel:+919315788388", '_self');
  };

  const handleGetDirection = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Contact VLP</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Get in touch with Virtuous Law Partners for comprehensive legal services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Phone Numbers */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-black">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black">Phone Numbers</h3>
              <div className="space-y-2 text-gray-600">
                <p>9315788388</p>
                <p>9634705613</p>
                <p>8810641831</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-black">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black">Email</h3>
              <p className="text-gray-600">virtuouslawpartners@gmail.com</p>
            </div>

            {/* Our Presence */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-black">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black">Our Presence</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>• Delhi</p>
                <p>• Allahabad</p>
                <p>• Lucknow</p>
                <p>• Gautam Buddha Nagar</p>
                <p>• Ghaziabad</p>
                <p>• Gurugram</p>
              </div>
            </div>
          </div>

          {/* Office Addresses */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-black">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Office Locations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border-2 border-black rounded-lg">
                <h4 className="font-semibold text-black mb-3">Delhi Office</h4>
                <p className="text-gray-600 text-sm">A-84, Defense Colony, New Delhi</p>
              </div>
              <div className="text-center p-6 border-2 border-black rounded-lg">
                <h4 className="font-semibold text-black mb-3">Greater NOIDA Office</h4>
                <p className="text-gray-600 text-sm">G-53, SNG Plaza, Knowledge Park II, Greater NOIDA, UP</p>
              </div>
              <div className="text-center p-6 border-2 border-black rounded-lg">
                <h4 className="font-semibold text-black mb-3">Gautam Buddha Nagar</h4>
                <p className="text-gray-600 text-sm">Chamber No. 611-612, Lane no. 14, District and Sessions Court, Gautam Buddha Nagar, UP</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Actions */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Button>
              <Button
                onClick={handleCallClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maps and Directions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Office Locations</h2>
            <p className="text-gray-600">Find us across multiple cities in India</p>
          </div>
          
          {/* Interactive Map */}
          <div className="relative w-full h-96 bg-white rounded-lg shadow-lg border-2 border-black mb-8">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com.qa/maps/d/embed?mid=1iqOnXdWDCtkEw8S6mDINsOqCB3UrKgk&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office Markers Info */}
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-semibold text-black mb-2 text-sm">Office Locations:</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Delhi Office</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Greater NOIDA Office</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Gautam Buddha Nagar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Ghaziabad Office</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Gurugram Office</span>
                </div>
              </div>
            </div>
          </div>

          {/* Get Direction Dropdown */}
          <div className="text-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg flex items-center space-x-2">
                  <NavigationIcon className="w-5 h-5" />
                  <span>Get Direction</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-2 border-black z-50">
                {officeLocations.map((location, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => handleGetDirection(location.url)}
                    className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                  >
                    {location.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Office locations grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center border-2 border-black">
              <h4 className="font-semibold text-black mb-2">Delhi Office</h4>
              <p className="text-gray-600 text-sm">A-84, Defense Colony, New Delhi</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center border-2 border-black">
              <h4 className="font-semibold text-black mb-2">Noida Office</h4>
              <p className="text-gray-600 text-sm">G-53, SNG Plaza, Knowledge Park II, Greater NOIDA, UP</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center border-2 border-black">
              <h4 className="font-semibold text-black mb-2">Gautam Buddha Nagar</h4>
              <p className="text-gray-600 text-sm">Chamber No. 611-612, Lane no. 14, District and Sessions Court</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactButtons />
    </div>
  );
};

export default Contact;
