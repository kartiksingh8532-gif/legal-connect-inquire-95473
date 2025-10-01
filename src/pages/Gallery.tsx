import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactButtons } from "@/components/ContactButtons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      url: "https://i.ibb.co/7JdZSNS4/Whats-App-Image-2025-09-25-at-21-20-54.jpg",
      alt: "Gallery Image 1"
    },
    {
      url: "https://i.ibb.co/W4zrq2tc/Whats-App-Image-2025-09-25-at-21-20-53.jpg",
      alt: "Gallery Image 2"
    },
    {
      url: "https://i.ibb.co/pjy3N5r8/Whats-App-Image-2025-09-25-at-21-20-52.jpg",
      alt: "Gallery Image 3"
    },
    {
      url: "https://i.ibb.co/gMBmSCvy/Whats-App-Image-2025-09-25-at-21-20-51.jpg",
      alt: "Gallery Image 4"
    },
    {
      url: "https://i.ibb.co/gbhFwR0H/Whats-App-Image-2025-09-25-at-21-20-49.jpg",
      alt: "Gallery Image 5"
    },
    {
      url: "https://i.ibb.co/dwKTqvdb/Whats-App-Image-2025-09-25-at-21-20-46.jpg",
      alt: "Gallery Image 6"
    },
    {
      url: "https://i.ibb.co/ZpzCgGbz/Whats-App-Image-2025-09-25-at-21-20-45.jpg",
      alt: "Gallery Image 7"
    },
    {
      url: "https://i.ibb.co/7tTwMd2D/Whats-App-Image-2025-09-25-at-21-20-43.jpg",
      alt: "Gallery Image 8"
    },
    {
      url: "https://i.ibb.co/r2vMv6KW/Whats-App-Image-2025-09-25-at-21-20-42.jpg",
      alt: "Gallery Image 9"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Gallery</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Explore moments and milestones from Virtuous Law Partners
          </p>
        </div>
      </section>

      {/* Gallery Slideshow Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg border-2 border-gray-200 hover:border-amber-600 transition-colors">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Grid View */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">View All Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg border-2 border-gray-200 hover:border-amber-600 transition-colors">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactButtons />
    </div>
  );
};

export default Gallery;
