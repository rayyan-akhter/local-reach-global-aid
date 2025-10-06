import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Users, Target } from "lucide-react";
import Navigation from "@/components/Navigation";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "Building confidence with reliable, verified support."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear reporting and audit-ready documentation."
    },
    {
      icon: Users,
      title: "Local Empowerment",
      description: "Engaging and training local teams to ensure sustainable project impact."
    },
    {
      icon: Target,
      title: "Accountability",
      description: "Ethical and responsible execution in every engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About GlobalConnect Foundation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted local partner for transparent and effective project execution across India
          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-16">
          <Card className="border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Company Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GlobalConnect India is a consulting and coordination firm bridging international organizations 
                with India's legal, business, and social ecosystem. We help NGOs, corporates, and individuals 
                establish, operate, and manage projects with transparency, compliance, and impact.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="mb-4 p-3 bg-primary text-primary-foreground rounded-lg w-fit">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted consultancy and coordination partner for global organizations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-to-br from-secondary/5 to-secondary/10">
            <CardContent className="p-8">
              <div className="mb-4 p-3 bg-secondary text-secondary-foreground rounded-lg w-fit">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower foreign clients with verified, ethical, and transparent services — from 
                documentation and consulting to project execution.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Services Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  NGO & Charity Coordination
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Partner NGO due diligence and verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Legal document verification & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Local project monitoring and on-ground support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Field & Execution Services
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>On-ground project coordination and supervision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Local resource management and vendor coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Beneficiary audits and transparency checks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Communication & Liaison
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Stakeholder and government liaison</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Translation and meeting coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Event management and community engagement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 p-4 bg-accent/10 rounded-full w-fit mx-auto">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;