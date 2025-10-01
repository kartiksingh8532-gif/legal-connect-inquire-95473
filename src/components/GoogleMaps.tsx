
import { MapPin, ExternalLink, Navigation as NavigationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const GoogleMaps = () => {
  const officeLocations = [
    {
      name: "Defence Colony, Delhi",
      address: "A-84, Defense Colony, New Delhi",
      url: "https://www.google.com/maps/dir//A-84,+Defense+Colony,+New+Delhi,+Delhi+110024/@28.482073,77.1910838,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce251285f2643:0xc4199f6dedf483c6!2m2!1d77.1910838!2d28.482073",
    },
    {
      name: "Gurugram Office",
      address: "Chamber no 358 A block Distt and session Court, Gurugram",
      url: "https://www.google.com/maps/dir//20.3519231,66.3715513/@20.3519231,66.3715513,17z",
    },
    {
      name: "Ghaziabad Office",
      address: "Ghaziabad, Uttar Pradesh",
      url: "https://www.google.com/maps/dir//20.3555254,66.4779331/@20.3555254,66.4779331,17z",
    },
    {
      name: "Noida Office",
      address: "Main Rd, Udyog Vihar, Greater Noida, Uttar Pradesh",
      url: "https://www.google.com/maps/dir//20.3555254,66.4779331/@20.3555254,66.4779331,17z",
    },
    {
      name: "Greater NOIDA Office",
      address: "G-53, SNG Plaza, Knowledge Park II, Greater NOIDA, UP",
      url: "https://www.google.com/maps/dir//20.2981218,66.4777794/@20.2981218,66.4777794,17z",
    }
  ];

  const handleGetDirection = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Office Locations</h2>
          <p className="text-gray-600">Find us across multiple cities in India</p>
          
          {/* Get Direction Button */}
          <div className="mt-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg flex items-center space-x-2">
                  <NavigationIcon className="w-5 h-5" />
                  <span>Get Direction</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-2 border-amber-600 z-50">
                {officeLocations.map((location, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => handleGetDirection(location.url)}
                    className="cursor-pointer hover:bg-amber-50 px-4 py-2"
                  >
                    {location.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="relative w-full h-96 bg-white rounded-lg shadow-lg border-2 border-amber-600">
          {/* Embedded Google Map */}
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
            <h4 className="font-semibold text-slate-800 mb-2 text-sm">Office Locations:</h4>
            <div className="text-xs text-gray-600 space-y-1">
              {officeLocations.map((location, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>{location.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
