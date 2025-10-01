
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatWidget = ({ isOpen, onClose }: ChatWidgetProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const SERVICE_ID = 'service_v5bu6t2';
  const TEMPLATE_ID = 'template_ufrctxl';
  const PUBLIC_KEY = 'ENFLtT8OzMeBaxFl5';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.phone.trim() || !/^\+91[0-9]{10}$/.test(formData.phone)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid phone number in +91XXXXXXXXXX format",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.subject.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a subject",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const templateParams = {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        tomail: 'virtuouslawpartners@gmail.com',
        logo: 'http://static.wixstatic.com/media/111838_f8741bf659844bd38fba92837dea873d~mv2.png/v1/fill/w_66,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-26%20at%2020_edited.png'
      };

      console.log('Sending email with params:', templateParams);

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      onClose();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-800">Contact Us</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91XXXXXXXXXX"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter the subject"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can we help you?"
              required
              className="w-full min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </form>

        <div className="text-xs text-gray-500 text-center mt-4">
          <p>We'll respond to your inquiry within 24 hours.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
