import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileCheck, TrendingUp, Users, MessageSquare, GraduationCap } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-collaboration.jpg";

const Home = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "NGO Field Verification",
      description: "Ensure projects are implemented as planned with verified reports and audits."
    },
    {
      icon: FileCheck,
      title: "Legal Document Review",
      description: "Check NGO registrations, compliance documents, and agreements to meet Indian legal standards."
    },
    {
      icon: TrendingUp,
      title: "Project Monitoring & Reporting",
      description: "Real-time updates, milestone tracking, and impact reporting to keep you informed."
    },
    {
      icon: MessageSquare,
      title: "Local Logistics & Communication",
      description: "Seamless coordination with vendors, volunteers, and local authorities."
    },
    {
      icon: GraduationCap,
      title: "Capacity Building Support",
      description: "Training local teams to align with your organization's global standards."
    },
    {
      icon: Users,
      title: "Community & Stakeholder Engagement",
      description: "Engage beneficiaries and local stakeholders for transparent execution."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Trusted Local Support for Global Organizations in India
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We provide verified project execution, legal and compliance checks, and on-the-ground coordination to help international NGOs, charities, and aid organizations deliver impactful initiatives across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button size="lg" variant="secondary" className="text-base font-semibold">
                  Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-base font-semibold bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive support to ensure your projects make a real impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="text-base">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you execute your projects with transparency, accountability, and local expertise.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-base font-semibold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;