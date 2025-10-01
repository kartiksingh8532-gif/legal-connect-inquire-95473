
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { MessageCircle, Calendar, User, Tag, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogsData from "@/data/blogs.json";

const BlogPost = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { id } = useParams();
  
  const blog = blogsData.blogs.find(b => b.id === id);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919315788388";
    const message = `Hello, I'd like to get in touch regarding ${blog?.title || 'legal services'}.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open("tel:+919315788388", '_self');
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-amber-300 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-amber-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-5 h-5" />
                <span>{blog.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {blog.excerpt}
              </p>
              <div className="text-gray-700 leading-relaxed space-y-6">
                {blog.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-amber-50 p-8 rounded-lg border border-amber-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Need Expert Legal Consultation?
              </h3>
              <p className="text-gray-700 mb-6">
                Our experienced legal team is ready to help you with your {blog.category.toLowerCase()} matters. 
                Get personalized advice and strategic legal solutions tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  Call for Consultation
                </Button>
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

export default BlogPost;
