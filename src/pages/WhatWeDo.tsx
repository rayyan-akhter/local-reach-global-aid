import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Users, Globe, Shield, Target, Handshake } from "lucide-react";
import Navigation from "@/components/Navigation";

const WhatWeDo = () => {
  const services = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Project Verification & Monitoring",
      description: "We ensure every project meets international standards with comprehensive verification and real-time monitoring systems."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Legal & Documentation Support",
      description: "Complete legal compliance and documentation support to meet all regulatory requirements in India."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Local Coordination & Communication",
      description: "Bridging cultural and linguistic gaps with expert local coordination and seamless communication."
    }
  ];

  const values = [
    {
      icon: <Globe className="h-6 w-6 text-secondary" />,
      title: "Global Impact",
      description: "Connecting international missions with local realities"
    },
    {
      icon: <Shield className="h-6 w-6 text-secondary" />,
      title: "Transparency",
      description: "Ensuring every initiative is carried out transparently"
    },
    {
      icon: <Target className="h-6 w-6 text-secondary" />,
      title: "Effectiveness",
      description: "Delivering results that create real impact on the ground"
    },
    {
      icon: <Handshake className="h-6 w-6 text-secondary" />,
      title: "Partnership",
      description: "Building strong partnerships with international NGOs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            🌍 Our Mission
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
            Our Purpose
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            GlobalConnect Foundation partners with international NGOs and organizations to simplify their work in India.
          </p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 sm:p-10">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed text-center">
                We provide verified local support for project execution, documentation, and compliance — ensuring every initiative is carried out <span className="font-semibold text-primary">transparently</span> and <span className="font-semibold text-primary">effectively</span>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
            Our Core Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bridge Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-border bg-gradient-to-br from-secondary/10 to-primary/5">
            <CardContent className="p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Bridging Global Missions with Local Realities
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Our team bridges the gap between global missions and local realities, offering seamless coordination that makes international operations in India <span className="font-semibold text-primary">seamless</span>, <span className="font-semibold text-primary">ethical</span>, and <span className="font-semibold text-primary">accountable</span>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
            Our Values
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Creating Real Impact
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We help global organizations create <span className="font-semibold text-primary">real impact on the ground</span> by providing the local expertise, cultural understanding, and operational support needed to make international initiatives successful in India.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
