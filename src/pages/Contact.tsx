import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = 'egPArZRs47Ed7Z7RD';
    emailjs.init(publicKey);
    console.log('EmailJS initialized');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_33vlrd9';
      const templateId = 'template_9msueis';
      const publicKey = 'egPArZRs47Ed7Z7RD';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        organization: formData.organization || 'Not provided',
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_email: 'rayyanakhter2003@gmail.com',
        reply_to: formData.email
      };

      console.log('Sending email with EmailJS...');
      
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS Success:', result);

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      let errorMessage = "There was a problem sending your message. Please try again or contact us directly.";
      
      if (error instanceof Error) {
        if (error.message.includes('Invalid email')) {
          errorMessage = "Please check your email address and try again.";
        } else if (error.message.includes('Service not found')) {
          errorMessage = "Email service configuration error. Please contact support.";
        } else if (error.message.includes('Template not found')) {
          errorMessage = "Email template configuration error. Please contact support.";
        } else if (error.message.includes('Invalid public key')) {
          errorMessage = "Email service authentication error. Please contact support.";
        } else if (error.message.includes('limit')) {
          errorMessage = "Email service limit reached. Please try again later or contact us directly.";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      toast({
        title: "Error Sending Message",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
            Partner With Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Get in touch to discuss how we can support your projects in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-border">
              <CardContent className="p-5 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Contact Information</h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm sm:text-base">Phone</p>
                      <p className="text-muted-foreground text-sm sm:text-base break-all">+91 96750 70725</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm sm:text-base">Email</p>
                      <p className="text-muted-foreground text-sm sm:text-base break-all">rayyanakhter2003@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm sm:text-base">Website</p>
                      <p className="text-muted-foreground text-sm sm:text-base break-all">www.globalconnectfoundation.org</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Why Work With Us?</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span>Verified, reliable project execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span>Complete legal compliance support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span>Transparent reporting and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span>Local expertise with global standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / Inquiry *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and how we can help..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;